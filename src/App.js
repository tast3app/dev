import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipePage from './pages/RecipePage/RecipePage';
import AddRecipePage from './pages/AddRecipePage/AddRecipePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes">
          <Route index element={<RecipePage />} />
          <Route path=":id" element={<RecipePage />} />
        </Route>
        <Route path="/add" element={<AddRecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
