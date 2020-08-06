/*import React from 'react';
import style from '../../recipe.module.css';

export default function Recipes({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>

      <img className={style.image} src={image} alt="" />
    </div>
  );
} */
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
