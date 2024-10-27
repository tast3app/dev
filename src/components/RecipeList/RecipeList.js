// src/components/RecipeList.js
import React from 'react';

function RecipeList({ favoritesOnly }) {
  const recipes = [
    { id: 1, title: 'Spaghetti Bolognese', isFavorite: true },
    { id: 2, title: 'Caesar Salad', isFavorite: false },
  ];

  // Filter based on the favoritesOnly prop
  const filteredRecipes = favoritesOnly
    ? recipes.filter(recipe => recipe.isFavorite)
    : recipes;

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes found.</p>
      )}
    </div>
  );
}

export default RecipeList;
