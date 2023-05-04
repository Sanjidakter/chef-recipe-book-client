// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import Home from "../pages/Home/Home/Home";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Chef from "../pages/Home/Home/Chef/Chef";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }


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
