// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    setError('');

    if(password.length <6)
    {
        setError('password must be 6 characters or long');
        return;
    }
    createUser(email,password)
    .then(result=>{
      const loggedUSer = result.user;
      console.log(loggedUSer)
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
    })
  };
  return (
    <div>
      <Container className="w-25 mx-auto">
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicimg">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Photo URL" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already Have an Account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <p className="text-danger">{error}</p>
        </Form>
      </Container>
    </div>
  );
};

export default Register;