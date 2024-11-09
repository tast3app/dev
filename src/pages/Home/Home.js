import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Search } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  // Function to handle generating a random recipe ID and navigation
  const handleGenerateMeal = () => {
    // Replace `0` with the maximum number of recipe IDs you have available
    const randomId = Math.floor(Math.random() * 5) + 1; 
    navigate(`/recipes/${randomId}`);
  };

  // // Function to handle generating a random recipe ID and navigation
  // const handleSearchBar = () => {
  //   // Replace `0` with the maximum number of recipe IDs you have available
  //   const randomId = Math.floor(Math.random() * 5) + 1; 
  //   navigate(`/recipes/${randomId}`);
  // };

  return (
    <div className="home-container">
      {/* Top Section */}
      <header className="home-header">
        <h1>TasteFinder.</h1>
        <p>Feed your soul, one bite at a time.</p>
      </header>

      {/* Middle Section */}
      <div className="home-button-section">
        <button className="generate-meal-button" onClick={handleGenerateMeal}>
          Roll the Dice, Dine Delightfully
        </button>
      </div>

      {/* Bottom Section */}
      <footer className="home-footer">
        <div className="search-bar">
          <Search className="search-icon" size={20} />
          <input type="text" placeholder="Explore:" />
          <button className="filters-button">Search Filters</button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
