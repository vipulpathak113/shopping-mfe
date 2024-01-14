import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ProductApplication from "product-mfe/App";
import CartApplication from "cart-mfe/App";
import AboutApplication from "about-mfe/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductApplication />,
      },
      {
        path: "cart",
        element: <CartApplication />,
      },
      {
        path: "about",
        element: <AboutApplication />,
      },
    ],
  },
],{
  basename:"/shopping-mfe/"
});

export default router;