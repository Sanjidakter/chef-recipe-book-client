// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import img from "../../../assets/healthy-recipes-cookbook-kitchen.webp";
import logo from "../../../assets/logo.webp";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useMatch } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./NavigationBar.css";

const NavigationBar = () => {
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();
  const homeMatch = useMatch("/");
  const blogMatch = useMatch("/blogs");

  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          The New American Cuisine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav>
              {" "}
              <li className={homeMatch ? "active" : ""}>
                <Link
                  style={{ textDecoration: "none", marginRight: "20px" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
            </Nav>
            <Nav>
              {" "}
              <li className={blogMatch ? "active" : ""}>
                <Link style={{ textDecoration: "none" }} to="/blogs">
                  Blog
                </Link>
              </li>
            </Nav>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <Link
                to="/userdetail"
                className="ms-auto"
                style={{ width: "30%" }}
              >
                <img
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  src={user?.photoURL}
                  alt=""
                  title={user?.displayName}
                />
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
            <Link to="/login" style={{ marginLeft: "10%", marginRight: "15%" }}>
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
