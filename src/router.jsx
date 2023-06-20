import { createBrowserRouter } from "react-router-dom";

import ItemForm from './components/Item-form/ItemForm';
import Reservations from "./components/Reservations/Reservations";
import Reserve from './components/reserve/Reserve';
import About from './routes/About';
import Details from './routes/Details';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';

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
    path: "/details/:id",
    element: <Details />,
  },
  { path: "/reserve", element: <Reserve /> },
  { path: "/form", element: <ItemForm /> },
  { path: "/users/:user_id/reservations/:id", element: <Reservations /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);

export default router;
