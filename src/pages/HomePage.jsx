import { useDispatch } from 'react-redux';

import { login } from '../store/authReducer';

import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Products from '../components/Products';
import OtherInfos from '../components/OtherInfos';

const HomePage = () => {
  const dispatch = useDispatch();

  const loginUser = localStorage.getItem('LOGIN_USER');
  if (localStorage.getItem('LOGIN_USER')) {
    dispatch(login(loginUser));
  }
  return (
    <>
      <Banner />
      <Categories />
      <Products />
      <OtherInfos />
    </>
  );
};
export default HomePage;
