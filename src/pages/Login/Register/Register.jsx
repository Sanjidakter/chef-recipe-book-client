// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
  return (
    <div>
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Logo
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email" required
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password" required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Photo URL</Form.Label>
                          <Form.Control
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                         
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Create Account
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{" "}
                          <a className="text-primary fw-bold">
                            <Link to="/login">Sign In</Link>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
