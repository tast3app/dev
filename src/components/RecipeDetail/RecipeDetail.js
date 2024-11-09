import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css'; // Import the CSS file
import { Heart, Share2} from 'lucide-react';
import recipes from '../RecipeCard/RecipeCard'; // Import the recipes array
import { useNavigate } from 'react-router-dom';



function RecipeDetails() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();

  // Find the recipe with the matching ID from the static data
  const recipe = recipes.find((recipe) => recipe.id === id);

  // If no recipe is found, you can display an error or a message
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

    // Function to handle generating a random recipe ID and navigation
  const handleCloseButton = () => {
    navigate(-1);
  };

  return (
    <div className="recipe-container">



      <div className="recipe-header">
        {/* Close button */}
        <button className="close-button" onClick={handleCloseButton}>TasteFinder.</button>
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="recipe-hero-image"
        />
        <h1 className="recipe-title">{recipe.title}</h1>
      </div>

      <div className="recipe-content">
        <section className="recipe-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <div className="ingredient-number">{index + 1}</div>
                <span className="ingredient-text">{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="recipe-section">
          <h2>Instructions</h2>
          <div className="instructions">
            {recipe.instructions}
          </div>
        </section>

        <div className="recipe-footer">
          <div className="recipe-meta">
            <span className="meta-item">Serves</span>
            <span className="meta-item">cal</span>
          </div>
          <div className="action-buttons">
            <button className="icon-button">
              <Share2 size={18} />
            </button>
            <button className="icon-button">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;