// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';
import Receipe from '../pages/Receipe/Receipe/Receipe';
import { Outlet } from 'react-router-dom';

const ReceipeLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ReceipeLayout;