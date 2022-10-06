import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  // ??? useEffect has a missing dependency: 'fetchDetails'. Either include it or remove the dependency array
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <>
      {loading && <div className="loading"></div>}
      {!loading && (
        <div className="details">
          <h3>{details.title}</h3>
          <img
            src={details.image}
            alt={details.title}
            className="details-img"
          />
          {/* FIXED ingredients: need to wait for api data to render. use ? after, like this: extendedIngredients? to check if data exists */}
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
      )}
    </>
  );
};

export default Recipe;
