import React, { useState } from 'react';
import axios from 'axios';
//import { uuid } from 'uuid/dist/v4';

// Components
import Recipes from './Components/Recipes/Recipes';
import Alert from './Components/Alert/Alert';

// keys
import { APP_ID } from './utils/api';
import { APP_KEY } from './utils/api';

import './App.css';

export default function App() {
  // state
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');
  const [query, setQuery] = useState('');

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert('No food with such name');
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery('');
      setAlert('');
    } else {
      setAlert('Please fill the form');
    }
  };

  // onSubmit method
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  // onChange method
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Food Search App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== '' && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />

        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe, i) => <Recipes key={i} recipe={recipe} />)}
      </div>
    </div>
  );
}
