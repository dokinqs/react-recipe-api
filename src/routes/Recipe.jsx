import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommend from "../components/Recommend";
import "./Recipe.css";

const Recipe = () => {
  // details is one object
  const [details, setDetails] = useState({});
  let params = useParams();
  const [loading, setLoading] = useState("true");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    // console.log(detailData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <>
      {loading && <div className="loading"></div>}
      {!loading && (
        <div>
          <div className="details">
            <h3>{details.title}</h3>
            <img
              src={details.image}
              alt={details.title}
              className="details-img"
            />
            {/* use .extendedIngredients?.map to check if data exists yet */}
            <ul>
              <h4>Ingredients</h4>
              {details.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
            <div className="details-instr-summ">
              <h4>Instructions</h4>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
              <h4>Summary</h4>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>
          </div>
          <Recommend />
        </div>
      )}
    </>
  );
};

export default Recipe;
