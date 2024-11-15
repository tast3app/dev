import React, { useState } from 'react';
import AddRecipe from '../../components/AddRecipe/AddRecipe';

const AdminPage = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <AddRecipe onAddRecipe={addRecipe} />
      {/* You could render recipes or manage them here */}
    </div>
  );
};

export default AdminPage;
