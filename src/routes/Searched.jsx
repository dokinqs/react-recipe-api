import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
    console.log(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  // TODO SHOULD IMPLEMENT A BETTER CHECK
  if (searchedRecipes == "") {
    return (
      <div className="search-error">
        No results for "{params.search}", please try again.
      </div>
    );
  }
  return (
    <div className="search container">
      <div className="search cards">
        {searchedRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="search card">
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <div className="gradient"></div>
                <p>{recipe.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
