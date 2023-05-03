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
import ErrorRoute from "../pages/ErrorRoute/ErrorRoute";
import Receipe from "../pages/Receipe/Receipe/Receipe";



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
    path: "/",
    element: <Main></Main>,
    children: [
     
      {
        path: "/chefs",
        element: <Chef></Chef>,
        
      },
    ],
  },
  {
    path: "/recipe",
    element: <ReceipeLayout></ReceipeLayout>,
    children: [
      {
        path: ":id",
        element:<Receipe></Receipe>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-sanji2601.vercel.app/news/${params.id}`),
      },
    ],
  },
  {
    path:"*",
    element: <ErrorRoute></ErrorRoute>
  }
  
]);

export default router;
