// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home/Home/Home';



const Main = () => {
    return (
        <div>
            <Container>
               <Home></Home>
               
            </Container>

        </div>
    );
};

export default Main;