// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ChefCards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import LazyLoad from "react-lazy-load";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ chefs }) => {
  // eslint-disable-next-line react/prop-types
  const { id, picture, name, likes, numRecipes, experience } = chefs;
  
  

  return (
    <Card className="card">
      
      <Card.Header style={{ fontSize: "24px", fontWeight: "bold" }}>
        {name} 
      </Card.Header>
      <Card.Body className="cardbody" style={{ display: "flex" }}>
        {/* <Card.Img style={{ width: "40%" }} variant="top" src={picture} /> */}

        <LazyLoad>
        <Card.Img
        style={{width:'80%',height:'100%'}}
        variant="top"
        src={picture}
       
      />
        </LazyLoad>
        <div className="details"
          style={{
            marginLeft: "20%",
            marginTop: "15%",
            textAlign: "center",
            backgroundColor: "wheat",
            fontFamily: "Arial, sans-serif",
            fontSize: "24px",
            fontWeight: "bold",
            padding: "5%",
          }}
        >
          <Card.Title>Experience: {experience}</Card.Title>
          <Card.Text>Number of Recipes: {numRecipes}</Card.Text>
          
          <Card.Text><FontAwesomeIcon icon={faThumbsUp} /> {likes}</Card.Text>
          
          <Link to={`/recipe/${id}`}>ViewRecipes</Link>
          
        </div>
       
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
