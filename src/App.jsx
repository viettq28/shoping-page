/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  { element: <Layout />, children: [
    { index: true, element: <HomePage />}
  ]}
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
