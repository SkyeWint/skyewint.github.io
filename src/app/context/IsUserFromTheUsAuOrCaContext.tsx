'use client';
import { createContext, useContext, useEffect, useState } from 'react';

interface IsUserFromTheUsCaOrAusContextProps {
  userIsFromTheUsCaOrAus: boolean;
}

const COUNTRY_CODES = ['US', 'CA', 'AU'];

const IsUserFromTheUsCaOrAuContext =
  createContext<IsUserFromTheUsCaOrAusContextProps>(null!);

const IsUserFromTheUsCaOrAusProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isFromAUsdCountry, setIsFromAUsdCountry] = useState(true);

  const fetchUserCountry = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const userIP = data.ip;

      const countryResponse = await fetch(
        `https://ipapi.co/${userIP}/country/`
      );
      const country = await countryResponse.text();

      setIsFromAUsdCountry(COUNTRY_CODES.includes(country));
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
