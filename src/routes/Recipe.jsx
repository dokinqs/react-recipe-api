import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  // details is one object
  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  // ??? useEffect has a missing dependency: 'fetchDetails'. Either include it or remove the dependency array
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div className="details">
      <h3>{details.title}</h3>
      <img src={details.image} alt={details.title} className="details-img" />
      {/* ??? ingredients: callback error bug? can only display if already on page */}
      {/* <ul>
        <h4>Ingredients</h4>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul> */}
      <div className="details-instr-summ">
        <h4>Instructions</h4>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        <h4>Summary</h4>
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      </div>
    </div>
  );
};

export default Recipe;
