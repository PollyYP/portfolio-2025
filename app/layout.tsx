import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "POLLY YOSPAN",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} font-manrope`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

