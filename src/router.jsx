import { createBrowserRouter } from 'react-router-dom';

import ItemForm from './components/Item-form/ItemForm';
import Reservations from './components/Reservations/Reservations';
import Reserve from './components/reserve/Reserve';
import Details from './routes/Details';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Products from './routes/Products';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products/:productId', element: <Details /> },
  { path: '/products/:productId/reservation', element: <Reserve /> },
  { path: '/products/new', element: <ItemForm /> },
  { path: '/products', element: <Products /> },
  { path: '/reservations', element: <Reservations /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);

export default router;
