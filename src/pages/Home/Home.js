import React from 'react';
import './Home.css';
import { Search } from 'lucide-react';


function Home() {
  return (
    <div className="home-container">
      {/* Close button */}
      <button className="close-button">×</button>

      {/* Top Section */}
      <header className="home-header">
        <h1>TasteFinder.</h1>
        <p>Feed your soul, one bite at a time.</p>
      </header>

      {/* Middle Section */}
      <div className="home-button-section">
        <button className="generate-meal-button">Roll the Dice, Dine Delightfully</button>
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