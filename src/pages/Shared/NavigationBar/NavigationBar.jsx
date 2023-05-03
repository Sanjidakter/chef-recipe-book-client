// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import img from "../../../assets/healthy-recipes-cookbook-kitchen.webp";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useMatch } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './NavigationBar.css'

const NavigationBar = () => {
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
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <nav>
                <img
                  style={{ height: "64px", width: "80px" }}
                  src={img}
                  alt=""
                />
              </nav>
              <Nav className="mx-auto">
                <li className={homeMatch ? "active" : ""}>
                  <Link
                    style={{ textDecoration: "none", marginRight: "20px" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className={blogMatch ? "active" : ""}>
                <Link style={{ textDecoration: "none" }} to="/blogs">
                  Blog
                </Link>
                </li>

                
              </Nav>
              <Nav>
                {user ? (
                  <Button onClick={handleLogout} variant="secondary">
                    {" "}
                    {user?.displayName}{" "}
                    <img
                      style={{ borderRadius: "50%", width: "5%" }}
                      src={user?.photoURL}
                      alt=""
                    />{" "}
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
