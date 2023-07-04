import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import { login, logout } from '../store/authReducer';

const Layout = () => {
  const dispatch = useDispatch();
  const loginUser = useLocalStorage('LOGIN_USER');

  useEffect(() => {
    if (loginUser) {
      dispatch(login());
    }
    if (!loginUser) {
      dispatch(logout());
    }

  }, [loginUser, dispatch]);

  return (
    <>
      <div className="container max-w-5xl mx-auto italic">
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
