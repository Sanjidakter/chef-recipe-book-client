// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Card, Toast } from 'react-bootstrap';

const RecipeCard = ({ name, ingredients, method, rating }) => {

    const [showToast, setShowToast] = useState(false);
  const [isFavorite, setIsFavorite] = useState();

  const handleFavorite = () => {
    setIsFavorite(true);
    setShowToast(true);
  };

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
          <Button
          variant="primary"
          onClick={handleFavorite}
          disabled={isFavorite}
        >
          {isFavorite ? "Favorited!" : "Add to favorites"}
        </Button>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            minWidth: "250px",
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Recipe added to favorites</strong>
          </Toast.Header>
          <Toast.Body style={{background:'wheat'}}>{name} is now your favorite!</Toast.Body>
        </Toast>
        </Card.Body>
      </Card>
    );
  };
export default RecipeCard;