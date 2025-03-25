import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export default function RootLayout({ children }) {
  return (
    <div className={`${manrope.variable} font-manrope antialiased`}>
      <Navbar />
      {children}
    </div>
  );
}