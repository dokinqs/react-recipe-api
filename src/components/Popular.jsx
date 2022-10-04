import React, { useState, useEffect } from 'react';
import './Popular.css';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`);
    const data = await api.json();
    setPopular(data.recipes);
  }

  return (
    <div>
      <h2>Popular</h2>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id} className="popular-card">
            {recipe.title}
            <img src={recipe.image} alt={recipe.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Popular;