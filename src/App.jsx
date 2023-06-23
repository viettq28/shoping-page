import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout';

const router = createBrowserRouter([
  { element: <Layout />, children: [
    { index: true, element: <Layout />}
  ]}
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
