import { createBrowserRouter } from 'react-router-dom';

import ItemForm from './components/Item-form/ItemForm';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/reserve/Reserve';
import Details from './routes/Details';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Products from './routes/Products';
import AppLayout from './components/layout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element:
  <AppLayout>
    <Home />
  </AppLayout>,
  },

  {
    path: '/products/:productId',
    element:
  <AppLayout>
    <Details />
  </AppLayout>,
  },

  {
    path: '/products/:productId/reservation',
    element: <Reserve />,
  },

  {
    path: '/products/new',
    element:
  <AppLayout>
    <ItemForm />
  </AppLayout>,
  },

  {
    path: '/products',
    element:
  <AppLayout>
    <Products />
  </AppLayout>,
  },

  {
    path: '/reservations',
    element:
  <AppLayout>
    <Reservations />
  </AppLayout>,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/signup',
    element: <SignUp />,
  },
]);

export default router;
