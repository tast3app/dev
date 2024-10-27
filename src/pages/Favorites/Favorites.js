// src/pages/Favorites/Favorites.js
import React from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';

function Favorites() {
  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <RecipeList favoritesOnly={true} /> {/* Display only favorites */}
    </div>
  );
}

export default Favorites;
