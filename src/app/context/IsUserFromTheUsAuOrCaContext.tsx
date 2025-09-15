'use client';
import { createContext, useContext, useEffect, useState } from 'react';

interface IsUserFromTheUsCaOrAusContextProps {
  userIsFromTheUsCaOrAus: boolean;
}

const USD_COUNTRIES = ['United States', 'Canada', 'Australia'];

const IsUserFromTheUsCaOrAuContext =
  createContext<IsUserFromTheUsCaOrAusContextProps>(null!);

const IsUserFromTheUsCaOrAusProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isFromAUsdCountry, setIsFromAUsdCountry] = useState(true);

  const fetchUserCountry = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const ipData = await response.json();
      const userIP = ipData.ip;

      const countryResponse = await fetch(`https://ip.guide/${userIP}`);
      const countryData = await countryResponse.json();
      const country = countryData.location.country;

      setIsFromAUsdCountry(USD_COUNTRIES.includes(country));
    } catch (error) {
      console.error('Error fetching user country:', error);
    }
  };

  useEffect(() => {
    fetchUserCountry();
  }, []); // Fetch user country once when the component mounts

  return (
    <IsUserFromTheUsCaOrAuContext.Provider
      value={{
        userIsFromTheUsCaOrAus: isFromAUsdCountry,
      }}
    >
      {children}
    </IsUserFromTheUsCaOrAuContext.Provider>
  );
};

const useIsUserFromTheUsCaOrAusContext =
  (): IsUserFromTheUsCaOrAusContextProps => {
    const context = useContext(IsUserFromTheUsCaOrAuContext);

    if (context == null) {
      throw new Error(
        'useIsUserFromTheUsContext should be use within a IsUserFromTheUsContext provider!'
      );
    }

    return context;
  };

export { IsUserFromTheUsCaOrAusProvider, useIsUserFromTheUsCaOrAusContext };
