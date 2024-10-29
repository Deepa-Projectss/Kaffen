import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigate from './Navigate';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  );
}

export default App;
