import { createBrowserRouter } from "react-router-dom";

import ItemForm from "./components/Item-form/ItemForm";
import Reserve from "./components/reserve/Reserve";
import About from "./routes/About";
import Product from "./routes/Product";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/products/:productId", element: <Product /> },
  { path: "/reserve", element: <Reserve /> },
  { path: "/form", element: <ItemForm /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

export default router;
