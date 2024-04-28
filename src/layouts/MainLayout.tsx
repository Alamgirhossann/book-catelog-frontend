import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Subscribe from '@/components/homeUI/Subscribe';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
