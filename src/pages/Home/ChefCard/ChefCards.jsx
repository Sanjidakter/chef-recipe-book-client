// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ChefCards.css";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ chefs }) => {
  const { id, picture, name, likes, numRecipes, experience } = chefs;
  


  return (
    <Card className="card">
      
      <Card.Header style={{ fontSize: "24px", fontWeight: "bold" }}>
        {name} 
      </Card.Header>
      <Card.Body style={{ display: "flex" }}>
        <Card.Img style={{ width: "30%" }} variant="top" src={picture} />
        <div
          style={{
            marginLeft: "20%",
            marginTop: "20%",
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
          <Card.Text>Likes: {likes}</Card.Text>
          
          <Link to={`/recipe/${id}`}>ViewRecipes</Link>
          
        </div>
       
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
