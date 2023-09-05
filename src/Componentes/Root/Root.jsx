import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Root.css'

export const Root = () => {
  return (
    <div className='root'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};