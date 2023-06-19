import { createBrowserRouter } from 'react-router-dom';

import ItemForm from './components/Item-form/ItemForm';
import Reserve from './components/reserve/Reserve';
import About from './routes/About';
import Details from './routes/Details';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/details/:id',
    element: <Details />,
  },
  { path: '/reserve', element: <Reserve /> },
  { path: '/form', element: <ItemForm /> },
]);

export default router;
