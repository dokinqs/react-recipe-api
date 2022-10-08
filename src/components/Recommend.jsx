import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Recommend.css";

const Recommend = () => {
  const [recRecipes, setRecRecipes] = useState([]);
  let params = useParams();

  const getRec = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=3`
    );
    const detailData = await data.json();
    setRecRecipes(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    getRec();
    // force scroll to top on loading new rec reipe
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <div className="rec">
      <h2>Recommendations</h2>
      {recRecipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <p>{recipe.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Recommend;
