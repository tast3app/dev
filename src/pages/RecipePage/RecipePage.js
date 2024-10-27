// src/pages/RecipePage/RecipePage.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Use this to get the recipe ID from the URL
import RecipeDetail from '../../components/RecipeDetail/RecipeDetail'; // This will be a reusable component for recipe details

function RecipePage() {
  const { id } = useParams(); // Retrieve recipe ID for fetching or displaying the correct recipe

  return (
    <div>
      <RecipeDetail recipeId={id} /> {/* Pass down the recipe ID */}
    </div>
  );
}

export default RecipePage;
