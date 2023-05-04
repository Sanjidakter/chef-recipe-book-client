// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import { Card } from "react-bootstrap";


const Blogs = () => {

  return (
    <div>
      <NavigationBar></NavigationBar>
      
      <Card style={{ width: "100%", height: "100%",padding:"5%",fontWeight:'bold' }}>
        <Card.Body>
          <Card.Title>
           1. Tell us the differences between uncontrolled and controlled
            components
          </Card.Title>
          <Card.Text>
            In React, a component can be either controlled or uncontrolled. The
            main differences between the two are: Controlled components: A
            controlled component is a component where the value of an input
            element is controlled by React through props. In other words, the
            state of the component is kept in sync with the value of the input
            element. This means that whenever the value of the input element
            changes, React updates the state of the component, and vice versa.
            Controlled components are typically used when you need to have more
            control over the input data, such as validating and manipulating the
            data before it is submitted. Uncontrolled components: An
            uncontrolled component is a component where the value of an input
            element is controlled by the DOM. In other words, the state of the
            component is not managed by React, but by the browser. This means
            that whenever the value of the input element changes, React does not
            update the state of the component. Uncontrolled components are
            typically used when you need a simpler and more lightweight way of
            handling input data, such as for simple forms. In summary,
            controlled components provide more control over the input data,
            while uncontrolled components provide a simpler and more lightweight
            way of handling input data.
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>2. How to validate React props using PropTypes</Card.Title>
          <Card.Text>
            To validate props in a React component using PropTypes, you need to
            import PropTypes from 'prop-types' package, define propTypes as a
            property on the component, and set it to an object that defines the
            prop types and their requirements.
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
           3. Tell us the difference between nodejs and express js.
          </Card.Title>
          <Card.Text>
            Node.js is a runtime environment for executing JavaScript code
            outside of a web browser, while Express.js is a web application
            framework built on top of Node.js that provides tools and
            abstractions for building web applications and APIs.
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
          4.  What is a custom hook, and why will you create a custom hook?
          </Card.Title>
          <Card.Text>
            In React, a custom hook is a reusable function that encapsulates and
            abstracts away some logic or behavior that can be shared across
            multiple components. It allows you to extract the common logic of
            your components into a separate function that can be easily reused,
            tested, and maintained. You might want to create a custom hook in
            the following situations: When you have some logic that is used in
            multiple components, and you want to avoid duplicating that logic in
            each component. When you have complex state management or side
            effects in a component, and you want to abstract that away into a
            reusable function.
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
