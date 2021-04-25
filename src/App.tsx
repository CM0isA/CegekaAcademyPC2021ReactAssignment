import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
