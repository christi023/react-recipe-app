import React, { useState, useEffect } from 'react';

// Components
import Recipes from './Components/Recipes/Recipes';

// keys
import { APP_ID } from './utils/api';
import { APP_KEY } from './utils/api';

import './App.css';

function App() {
  // state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const { query, setQuery } = useState('chicken');

  // useEffect
  useEffect(() => {
    getRecipes(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  // search method
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // get search method
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          value={search}
          //onChange={(e) => updateSearch(e)}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipes
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
