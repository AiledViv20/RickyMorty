import React from 'react';
import './App.css';
import CardFilterProvider from './context/CardFilterContext';
import Home from './page/Home';

function App() {
  return (
    <CardFilterProvider>
      <Home />
    </CardFilterProvider>
  );
}

export default App;
