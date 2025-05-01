import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata = {
  title: 'Polly Yospan',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-manrope antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
