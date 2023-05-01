// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';


const router = createBrowserRouter([
{
    path:'/',
    element: <LoginLayout></LoginLayout>,
    children:[
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path: '/register',
            element:<Register></Register>
        }
    ]
}
])

export default router;