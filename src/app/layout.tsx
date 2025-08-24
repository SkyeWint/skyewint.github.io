import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Header from './components/navigation/header/header';
import { blue } from './utils/colors';
import { IsUserFromTheUsCaOrAusProvider } from './context/IsUserFromTheUsAuOrCaContext';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Skyfox Personal Development & Coaching',
  description: 'Skyfox Personal Development & Coaching',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-[family-name:var(--font-lexend)] flex flex-col h-dvh overflow-scroll antialiased`}
      >
        <Header />
        <div className={`flex-grow ${blue}`}>
          <IsUserFromTheUsCaOrAusProvider>
            {children}
          </IsUserFromTheUsCaOrAusProvider>
        </div>
      </body>
    </html>
  );
}
