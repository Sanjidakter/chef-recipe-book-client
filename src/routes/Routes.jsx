// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Main from "../layouts/Main";
import Chef from "../pages/Home/Home/Chef/Chef"
import ReceipeLayout from "../layouts/ReceipeLayout";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
     
      {
        path: ":id",
        element: <Chef></Chef>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-sanji2601.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <ReceipeLayout></ReceipeLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-sanji2601.vercel.app/news/${params.id}`),
      },
    ],
  },
  
]);

export default router;
