import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

const Layout = (props) => {
  return (
    <>
      <div className="container max-w-4xl mx-auto italic">
        <MainNavigation />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
