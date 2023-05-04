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
import Blogs from "../pages/Blogs/Blogs"
import UserDetail from "../pages/UserDetail/UserDetail";



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
      {
        path:'/userdetail',
        element:<UserDetail></UserDetail>,
      }
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
        element:<PrivateRoute><Receipe></Receipe></PrivateRoute>
        
      },
    ],
  },
  {
    path:"*",
    element: <ErrorRoute></ErrorRoute>
  },
  {
    path:"/blogs",
    element:<Blogs></Blogs>
  }
  
]);



export default router;
