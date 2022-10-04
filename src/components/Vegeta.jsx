import React, { useState, useEffect } from "react";

const Vegeta = () => {
  const [vegeta, setVegeta] = useState([]);

  useEffect(() => {
    getVegeta();
  }, []);

  // no cache version
  // const getVegeta = async () => {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=6`
  //   );
  //   const data = await api.json();
  //   setVegeta(data.results);
  //   console.log(data.results);
  // };

  // cache version for development purposes
  const getVegeta = async () => {
    const inCache = localStorage.getItem("vegeta");

    if (inCache) {
      setVegeta(JSON.parse(inCache));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=6`
      );
      const data = await api.json();

      localStorage.setItem("vegeta", JSON.stringify(data.results));
      setVegeta(data.results);
      // console.log("veg added to cache: ", data.results);
    }
  };

  return (
    <div className="vegeta container">
      <h2>Vegetarian</h2>
      <div className="vegeta cards">
        {vegeta.map((recipe) => {
          return (
            <div key={recipe.id} className="vegeta card">
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

export default Vegeta;
