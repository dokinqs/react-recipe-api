import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Searched.css";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=2`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="search container">
      <div className="search cards">
        {searchedRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="search card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="gradient"></div>
              <p>{recipe.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
