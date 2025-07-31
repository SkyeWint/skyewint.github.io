import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Header from './components/navigation/header/header';

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
        <div className="flex-grow bg-linear-115 from-transparent to-sky-300/2 bg-sky-50/50">
          {children}
        </div>
      </body>
    </html>
  );
}
