import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import './App.css';

function App() {
  // For now, let's just show the AboutPage
  // You can switch between HomePage and AboutPage by changing this line
  return (
    <div className="App">
      <AboutPage />
    </div>
  );
}

export default App;