import {
  createBrowserRouter,
} from 'react-router-dom';

import Reserve from './components/reserve/Reserve';
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
  {
    path: '/reserve',
    element: <Reserve />,
  },
]);

export default router;
