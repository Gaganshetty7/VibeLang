import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TranslatePage from './pages/TranslatePage';
import ChatRoomsPage from './pages/ChatRoomsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translatePage" element={<TranslatePage />} />
        <Route path="/chatroomsPage" element={<ChatRoomsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
