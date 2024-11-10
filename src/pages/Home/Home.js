import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Search } from 'lucide-react';
import recipes from '../../components/RecipeCard/RecipeCard';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenerateMeal = () => {
    const randomId = Math.floor(Math.random() * 5) + 1;
    navigate(`/recipes/${randomId}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const words = searchQuery.split(' ');

    // Find the first recipe where any tag matches any word in the query
    const matchingRecipe = recipes.find(recipe =>
      words.some(word =>
        recipe.tags.some(tag => tag.toLowerCase() === word)
      )
    );

    // Navigate to matching recipe or default to ID 1 if no match is found
    if (matchingRecipe) {
      navigate(`/recipes/${matchingRecipe.id}`);
    }

    setSearchQuery(''); // Clear the search after navigation
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>TasteFinder.</h1>
        <p>Feed your soul, one bite at a time.</p>
      </header>

      <div className="home-button-section">
        <button className="generate-meal-button" onClick={handleGenerateMeal}>
          Roll the Dice, Dine Delightfully
        </button>
      </div>

      <footer className="home-footer">
        <div className="search-bar">
          <Search 
            className="search-icon" 
            size={20} 
            onClick={handleSearch} // Trigger search on icon click
          />
          <input 
            type="text" 
            placeholder="Explore:" 
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // Trigger search on Enter key press
            className="w-full"
          />
          <button className="filters-button">Search Filters</button>
        </div>
      </footer>
    </div>
  );
};

export default Home;