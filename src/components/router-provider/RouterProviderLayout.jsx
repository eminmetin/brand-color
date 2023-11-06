import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from '../Content';
import Collection from './../Collection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Content />,
    children: [],
  },
  {
    path: '/collection/:slugs',
    element: <Collection />,
  },
]);

const RouterProviderLayout = ({ children }) => {
  return (
    <>
      <RouterProvider router={router}>{children}</RouterProvider>
    </>
  );
};

export default RouterProviderLayout;
