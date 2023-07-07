/* eslint-disable react/prop-types */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout, { loader as productsLoader } from './pages/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import ShopPage from './pages/ShopPage';
import LoginPage, { action as loginAction } from './pages/LoginPage';
import RegisterPage, { action as registerAction } from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import store from './store/store';

const router = createBrowserRouter([
  {
    element: <Layout />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <Navigate to="all" /> },
      { path: 'shop/:category', element: <ShopPage /> },
      { path: 'detail/:productId', element: <DetailPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'cart',
            element: <CartPage />,
          },
          {
            path: 'checkout',
            element: <CheckoutPage />,
          },
        ],
      },
      { path: 'login', element: <LoginPage />, action: loginAction },
      { path: 'register', element: <RegisterPage />, action: registerAction },
    ],
    loader: productsLoader,
    shouldRevalidate: () => false,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
