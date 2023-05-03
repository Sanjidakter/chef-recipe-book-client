// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ChefCards.css'


const NewsCard = ({ chef }) => {
  const {id,chefPicture,chefName,yearsOfExperience,numRecipes,likes,viewRecipesButton} = chef;
  return (
    <Card className="card">
      <Card.Header as="h5">{chefName}</Card.Header>
      <Card.Body>
      <Card.Img style={{width:'30%'}} variant="top" src={chefPicture} />
        <Card.Title>Experience: {yearsOfExperience}</Card.Title>
        <Card.Text>
          Number of Recipes: {numRecipes}
        </Card.Text>
        <Card.Text>
          Likes: {likes}
        </Card.Text>
        <Button variant="primary">viewRecipesButton</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
