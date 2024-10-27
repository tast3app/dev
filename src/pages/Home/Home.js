// src/pages/Home/Home.js
import React from 'react';
import RecipeList from '../../components/RecipeList/RecipeList'; // Assuming we’ll create a RecipeList component for displaying recipes

function Home() {
  return (
    <div>
      <h1>Welcome to Tasteful</h1>
      <RecipeList /> {/* This will show a list of recipes */}
    </div>
  );
}

export default Home;
