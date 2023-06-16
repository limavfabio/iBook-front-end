import { createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Details from "./routes/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

export default router;
