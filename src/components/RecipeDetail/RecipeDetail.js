import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import './RecipeDetails.css'; // Import the CSS file
import { Share2, Heart, Clock, ChefHat, Utensils } from 'lucide-react';
import recipes from '../RecipeList/RecipeList'; // Import the recipes array

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

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

  // Function to highlight matching tags
  const renderTags = () => {
    if (!searchQuery) return null;

    return (
      <div className="recipe-tags">
        {recipe.tags.map((tag, index) => (
          <span 
            key={index}
            className={`recipe-tag ${
              tag.toLowerCase().includes(searchQuery.toLowerCase()) 
                ? 'bg-yellow-200' 
                : 'bg-gray-100'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="recipe-container">
      <div className="recipe-header">
        {/* Close button */}
        <button className="close-button" onClick={handleCloseButton}>
          TasteFinder.
        </button>
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="recipe-hero-image"
        />
        <h1 className="recipe-title">{recipe.title}</h1>
        {/* Display tags if there was a search query */}
        {renderTags()}
      </div>

      <div className="recipe-content">
        <div className="recipe-info">
          <span className="info-item">
            <Clock size={16} className="info-icon" />
            Prep: {recipe.prepTime}
          </span>
          <span className="info-item">
            <Clock size={16} className="info-icon" />
            Cook: {recipe.cookTime}
          </span>
          <span className="info-item">
            <ChefHat size={16} className="info-icon" />
            {recipe.difficulty}
          </span>
          <span className="info-item">
            <Utensils size={16} className="info-icon" />
            {recipe.cuisine}
          </span>
        </div>

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
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="recipe-footer">
          <div className="recipe-meta">
            <span className="meta-item">Serves: {recipe.servings}</span>
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