import React, { useState } from 'react';
import AdminAddRecipe from '../../components/Admin/AdminAddRecipe';
import './Admin.css';

const AdminPage = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminAddRecipe onAddRecipe={addRecipe} />
      {/* You could render recipes or manage them here */}
    </div>
  );
};

export default AdminPage;
