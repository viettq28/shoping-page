/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import { loader as productsLoader } from './components/Products';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  { element: <Layout />, children: [
    { index: true, element: <HomePage />, loader: productsLoader},
    { path: 'shop', element: <ShopPage /> },
    { path: 'detail/:productId', element: <DetailPage /> },
    { path: 'cart', element: <CartPage /> },
    { path: 'checkout', element: <CheckoutPage /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ]}
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
