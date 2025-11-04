import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import All_Products from "../pages/All_Products";
import My_Products from "../pages/My_Products";
import My_bids from "../pages/My_bids";
import Create_Product from "../pages/Create_Product";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayouts from "../layouts/AuthLayouts";
import PrivateRoute from "../components/ProtectedRoute/PrivateRoute";
import DetailsPage from "../components/ProtectedRoute/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-products",
        loader: () => fetch("http://localhost:3000/products"),
        element: (
          <PrivateRoute>
            <All_Products></All_Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/products/${params.id}`
          );
          if (!res.ok) throw new Error("Failed to fetch product");
          return res.json(); // <-- crucial
        },
        element: <DetailsPage></DetailsPage>,
        errorElement: <div>Product not found!</div>,
      },
      {
        path: "/my-products",
        Component: My_Products,
      },
      {
        path: "/my-bids",
        Component: My_bids,
      },
      {
        path: "/create-product",
        Component: Create_Product,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Registration,
      },
    ],
  },
]);
