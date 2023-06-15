import {
  createBrowserRouter,
} from "react-router-dom";

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

export default router;
