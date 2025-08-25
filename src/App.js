import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TranslatePage from './pages/TranslatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translatePage" element={<TranslatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
