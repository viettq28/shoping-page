/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout, { loader as productsLoader } from './pages/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  { element: <Layout />, id: 'root', children: [
    { index: true, element: <HomePage /> },
    { path: 'shop', element: <ShopPage /> },
    { path: 'shop/:category', element: <ShopPage /> },
    { path: 'detail/:productId', element: <DetailPage /> },
    { path: 'cart', element: <CartPage /> },
    { path: 'checkout', element: <CheckoutPage /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ], loader: productsLoader, shouldRevalidate: () => false}
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
