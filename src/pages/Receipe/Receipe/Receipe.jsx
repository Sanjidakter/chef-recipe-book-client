// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Receipe = () => {
  
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await fetch(` https://chef-recipe-book-server-sanji2601.vercel.app/recipe/${id}`);
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
          console.log(error);
        }
      };
      loadData();
    }, [id]);

    // const {  picture, name, experience } = recipe;
  
    if (!recipe) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.experience}</p>
        {/* Render the rest of the recipe data here */}
      </div>
    
  );
};

export default Receipe;
