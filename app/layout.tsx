import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

interface LayoutProps {
  children: React.ReactNode;  // Explicit type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${manrope.variable} font-manrope antialiased`}>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;