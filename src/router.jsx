import {
  createBrowserRouter,
} from 'react-router-dom';

import About from './routes/About';
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
]);

export default router;
