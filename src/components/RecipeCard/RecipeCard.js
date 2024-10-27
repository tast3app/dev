// src/components/RecipeCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <div>
      <h2>
        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
      </h2>
    </div>
  );
}

export default RecipeCard;
