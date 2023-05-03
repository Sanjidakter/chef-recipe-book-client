// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const [user,setUser] = useState(null);
    const { signIn,
      signInWithGoogle, signInWithGithub} = useContext(AuthContext);

      const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
      }

      const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
      const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
        <Container>
          <Row className="vh-100 vw-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Login
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                        
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Not have an account??{" "}
                          <a className="text-primary fw-bold">
                            <Link to="/register">Register</Link>
                          </a>
                        </p>

                      </div>
                      <div style={{alignItems:'center'}}>
                    <button onClick={handleGoogleSignIn} style={{marginRight:'5px'}} className="btn btn-primary ">sign-in with Google</button>
                    <button onClick={handleGithubSignIn} className="btn btn-primary">sign-in with Github</button>
                    </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Login;