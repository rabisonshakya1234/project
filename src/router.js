import { createBrowserRouter } from "react-router-dom";

import UserIndex from "./user/views/Index";
import CategoryIndex from "./category/views/Index";
import Layout from "common/Layout";


import Login from "auth/Login";
import Register from "auth/Register";
import Protected from "auth/Protected";

import Home from "Home";

import UserCreate from "user/views/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Protected />,
        children: [
          {
            path: "category",
            element: <CategoryIndex />,
          },
          {
            path: "user",
            element: <UserIndex />,
          },
          {
            path: "user/create",
            element: <UserCreate />,
          },
        ],
      },
     
     
      {
        path: "home/:id",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />
  },
]);

export default router;
