import React, { useState, useEffect } from "react";
import "./Popular.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // cache results for development to save api calls
  const getPopular = async () => {
    const inCache = localStorage.getItem("popular");

    if (inCache) {
      setPopular(JSON.parse(inCache));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=dessert%2Cvegan&number=6`
        );
        const data = await api.json();

        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log("pop added to cache: ", data.recipes);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="popular container">
      <h2>Popular</h2>
      <div className="popular cards">
        {popular.map((recipe) => {
          return (
            <div key={recipe.id} className="popular card">
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

export default Popular;
