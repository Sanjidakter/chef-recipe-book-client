// eslint-disable-next-line no-unused-vars
import React from "react";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ChefCards.css'


const NewsCard = ({ chef }) => {
  const {_id,picture,name,likes,numRecipes,experience} = chef;
  return (
    <Card className="card">
      <Card.Header  style={{ fontSize: '24px',
  fontWeight: 'bold',}}>{name}</Card.Header>
      <Card.Body style={{display:'flex'}}>
      <Card.Img style={{width:'30%'}} variant="top" src={picture} />
       <div style={{marginLeft:'20%',marginTop:'20%',textAlign:'center',backgroundColor:'wheat',fontFamily: 'Arial, sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',padding:'5%'}}>
       <Card.Title>Experience: {experience}</Card.Title>
        <Card.Text>
          Number of Recipes: {numRecipes}
        </Card.Text>
        <Card.Text>
          Likes: {likes}
        </Card.Text>
        <Link to={`/chefs/${_id}`}>ViewRecipes</Link>
       </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
