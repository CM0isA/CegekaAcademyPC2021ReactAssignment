import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { AlbumsContextProvider } from './contexts/AlbumContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AlbumsContextProvider>
        <Nav />
        <Main />
        </AlbumsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
