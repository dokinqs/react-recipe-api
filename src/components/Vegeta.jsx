import React, { useState, useEffect } from 'react';

const Vegeta = () => {
  const [vegeta, setVegeta] = useState([]);

  useEffect(() => {
    getVegeta();
  }, []);

  const getVegeta = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=6`);
    const data = await api.json();
    setVegeta(data.recipes);
  }

  return (
    <div>
      <h2>Vegetarian</h2>
      {vegeta.map((recipe) => {
        return (
          <div key={recipe.id} className="vegeta-card">
            {recipe.title}
            <img src={recipe.image} alt={recipe.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Vegeta;