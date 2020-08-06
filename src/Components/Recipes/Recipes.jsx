import React, { useState } from 'react';
// component
import RecipeDetails from '../RecipeDetails/RecipeDetails';

export default function Recipes({ recipe }) {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
}
