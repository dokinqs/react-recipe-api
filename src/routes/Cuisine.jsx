import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  // useEffect(() => {
  //   getCuisine();
  // }, []);

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  // cache results for development to save api calls
  const getCuisine = async (name) => {
    // SHOULD ADD A CHECK TO SEE IF name MATCHES ONE OF THE CUISINES, OTHERWISE EMPTY ARRAY VALUE IS STORED IN LOCALSTORAGE FOR RANDOM KEY if user  inputs random slug. validSlugs = [Chinese, French, Indian, Italian, Korean, Mediterranean, Middle Eastern, Thai, Vietnamese];
    const inCache = localStorage.getItem(name);

    if (inCache) {
      setCuisine(JSON.parse(inCache));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=6`
      );
      const data = await api.json();

      localStorage.setItem(name, JSON.stringify(data.results));
      setCuisine(data.results);
      console.log(data.results);
    }
  };

  return (
    <div className="cuisine container">
      <div className="cuisine cards">
        {cuisine.map((recipe) => (
          <div key={recipe.id} className="cuisine card">
            <img src={recipe.image} alt={recipe.title} />
            <div className="gradient"></div>
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;