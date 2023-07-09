/* eslint-disable react/prop-types */
import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import ProtectedRoute from './components/ProtectedRoute';
import PreventAuth from './components/PreventAuth';
import Layout, { loader as productsLoader } from './pages/Layout';
import { action as loginAction } from './pages/LoginPage';
import { action as registerAction } from './pages/RegisterPage';
import Spinner from './UI/Spinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
// import DetailPage from './pages/DetailPage';
// import ShopPage from './pages/ShopPage';
// import LoginPage, { action as loginAction } from './pages/LoginPage';
// import RegisterPage, { action as registerAction } from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    element: <Suspense fallback={<Spinner />}><Layout /></Suspense>,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/shop/:category', element: <ShopPage /> },
      { path: '/detail/:productId', element: <DetailPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/cart',
            element: <CartPage />,
          },
          {
            path: '/checkout',
            element: <CheckoutPage />,
          },
        ],
      },
      { element: <PreventAuth />, children: [
        { path: '/login', element: <LoginPage />, action: loginAction },
        { path: '/register', element: <RegisterPage />, action: registerAction },
      ]}
    ],
    loader: productsLoader,
    shouldRevalidate: () => false,
  },
]);

function App({children}) {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </Provider>
  );
}

export default App;
