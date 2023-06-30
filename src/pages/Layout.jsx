import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

const Layout = () => {
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

export const loader = async function () {
  const res = await fetch(
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
  );
  const data = await res.json();
  const finData = data.map(product => ({...product, id:  Object.values(product._id)[0]}));
  return finData;
};
