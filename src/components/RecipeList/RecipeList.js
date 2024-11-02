// src/components/RecipeList.js
import React from 'react';

function RecipeList({ matchesOnly }) {
  const recipes = [
    { id: 1, title: 'Spaghetti Bolognese', tags: ["italian", "pasta", "tomato", "meat", "sauce", "dinner"] },
    { id: 2, title: 'Caesar Salad', tags: ["healthy", "salad", "lettuce", "croutons", "dressing", "chicken"] },
    { id: 3, title: 'Chicken Stir-Fry', tags: ["quick", "easy", "chicken", "vegetables", "stir-fry", "dinner"] },
    { id: 4, title: 'Salmon with Roasted Vegetables', tags: ["healthy", "fish", "salmon", "vegetables", "oven", "dinner"] },
    { id: 5, title: 'Beef Stew', tags: ["comfort", "hearty", "beef", "potatoes", "carrots", "onion", "soup"] },
    { id: 6, title: 'Shrimp Scampi', tags: ["seafood", "shrimp", "pasta", "butter", "garlic", "lemon", "white wine"] },
    { id: 7, title: 'Chicken Pot Pie', tags: ["comfort", "soup", "chicken", "potatoes", "vegetables", "crust"] },
    { id: 8, title: 'Vegetarian Chili', tags: ["vegetarian", "chili", "beans", "tomatoes", "corn", "peppers", "spices"] },
    { id: 9, title: 'Quinoa Salad', tags: ["healthy", "quinoa", "vegetables", "protein", "salad", "dressing"] },
    { id: 10, title: 'Chocolate Chip Cookies', tags: ["dessert", "cookies", "chocolate chips", "baking"] }
  ]

  const searchTag = "lemon";

  // Filter based on the favoritesOnly prop
  const filteredRecipes = matchesOnly
  ? recipes.filter(recipe => recipe.isFavorite) // Filter by favorites (unchanged)
  : recipes.filter(recipe => recipe.tags.includes(searchTag)); // Filter by tag

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      ) : (
        <p>No matching recipes found.</p>
      )}
    </div>
  );
}

export default RecipeList;
