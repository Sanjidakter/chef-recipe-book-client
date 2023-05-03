// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RecipeCard = ({ name, ingredients, method, rating, favorite }) => {
    return (
      <Card>
        <Card.Body className="mb-4">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Rating: {rating}
          </Card.Subtitle>
          <Card.Text>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            {method}
          </Card.Text>
          <Button variant={favorite ? "success" : "secondary"}>
            {favorite ? "Favorite" : "Add to favorites"}
          </Button>
        </Card.Body>
      </Card>
    );
  };
export default RecipeCard;