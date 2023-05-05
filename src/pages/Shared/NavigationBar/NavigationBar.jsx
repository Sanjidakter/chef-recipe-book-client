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
    <div>
      {/* <Container >
        <Navbar
          style={{ width: "100%" }}
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <nav>
              <img style={{ height: "64px", width: "80px" }} src={logo} alt="" />
            </nav>{" "}
            <p className="w-75"
              style={{
                fontWeight: "bold",
                color: "black",
                fontFamily: " sans-serif",
              }}
            >
              
              Chef Recipe Book
            </p>
            <Nav className="mx-auto w-75" style={{padding:'10%'}}>
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
            <Nav style={{width:'40%'}}>
            {user ? (
                <Link to="/userdetail" >
                  <img
                    style={{ borderRadius: "50%", width: "80%", }}
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
              <Link to="/login" style={{marginLeft:'10%',marginRight:'15%' }}>
                <Button
                  onClick={handleLogout}
                  variant="secondary"
                >
                  Logout
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container> */}

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Chef Recipe Book
          </Navbar.Brand>
          <Nav className="">
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
          <Nav>
            {user ? (
              <Link to="/userdetail" className="ms-auto" style={{width:'30%'}}>
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
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
