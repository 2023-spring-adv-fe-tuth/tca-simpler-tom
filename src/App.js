import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Play } from './Play';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { saveGameToCloud, loadGamesFromCloud } from './tca-cloud-api';

function App() {

  const [gameResults, setGameResults] = useState([]);

  useEffect(
    () => {
      
      const loadGames = async () => {

        const data = await loadGamesFromCloud(
          "tsteele@madisoncollege.edu"
          , "tca-simpler-tom"
        );
        console.log(data);
    
        setGameResults(data.map(x => x));
      };
            
      loadGames();
    }
    , []
  );

  const addNewGameResult = (newGameResult) => {
    setGameResults(
      [
        ...gameResults
        , newGameResult
      ]
    );

    saveGameToCloud(
      "tsteele@madisoncollege.edu"
      , "tca-simpler-tom"
      , new Date().toISOString()
      , newGameResult
    );
  };

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
