// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home/Home/Home';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Chef from '../pages/Home/Home/Chef/Chef'



const Main = () => {
    return (
        <div>
            <Container>
               <Home></Home>
               <Chef></Chef>
               
            </Container>

        </div>
    );
};

export default Main;