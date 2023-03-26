import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Play } from './Play';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [gameResults, setGameResults] = useState([]);

  const addNewGameResult = (newGameResult) => setGameResults(
    [
      ...gameResults
      , newGameResult
    ]
  );

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home 
                gameResults={gameResults}
              />
            } 
          />
          <Route
            path='/play'
            element={
              <Play 
                addNewGameResult={addNewGameResult}
              />
            } 
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
