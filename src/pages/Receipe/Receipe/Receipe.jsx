// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faDiagramSuccessor} from "@fortawesome/free-solid-svg-icons";
import RecipeCard from "../RecipeCard/RecipeCard";

const Receipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://chef-recipe-book-server-sanji2601.vercel.app/recipe/${id}`
        );
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
    <div >
      <section style={{ display: "flex" }} className="chefIntro">
        <div
          style={{ marginLeft: "10%", marginTop: "30%", alignContent: "center" }}
        >
          <i><h1 style={{marginTop:'5%'}}>{recipe.name}</h1></i>
          <h2 style={{marginTop:'5%'}}>{recipe.bio}</h2>
          <h3 style={{marginTop:'5%'}}><FontAwesomeIcon icon={faDiagramSuccessor} /> {recipe.likes}Years of Experience : {recipe.experience}</h3>
          <h3 style={{marginTop:'5%'}}>
            <FontAwesomeIcon icon={faThumbsUp} /> {recipe.likes}
          </h3>
          <h3 style={{marginTop:'5%'}}>Recipes:{recipe.numRecipes}</h3>
        </div>

        <img
          src={recipe.picture}
          style={{ width: "50%", maxHeight: "60%",objectFit:'cover' }}
          alt=""
        />
      </section>
      <section style={{padding:'10%'}} className="recipes">
        <div className="row">
          {recipe.recipes.map((recipe, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Receipe;
