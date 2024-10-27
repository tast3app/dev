// src/pages/RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
function RecipeDetails() {
  const { id } = useParams(); // Get the recipe ID from the URL
  // You would typically fetch recipe details using this ID

  // Dummy data for illustration
  const recipe = {
    id: id,
    title: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onions", "Garlic"],
    instructions: "1. Cook spaghetti. 2. Brown beef with onions and garlic. 3. Add tomato sauce. 4. Serve with spaghetti."
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
