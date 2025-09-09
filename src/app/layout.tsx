import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Header from './components/navigation/header/header';
import { blue } from './utils/colors';
import { IsUserFromTheUsCaOrAusProvider } from './context/IsUserFromTheUsAuOrCaContext';
import Footer from './components/navigation/footer/footer';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Skyfox Personal Development & Coaching',
  description: 'Skyfox Personal Development & Coaching',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-[family-name:var(--font-lexend)] flex flex-col h-dvh antialiased`}
      >
        <Header />
        <div className={`flex-grow ${blue}`}>
          <IsUserFromTheUsCaOrAusProvider>
            {children}
          </IsUserFromTheUsCaOrAusProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
