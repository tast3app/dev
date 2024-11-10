import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipePage from './pages/RecipePage/RecipePage';
import Favorites from './pages/Favorites/Favorites';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipePage />}>
          <Route path=":id" element={<RecipePage />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;