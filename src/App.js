import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Play } from './Play';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />} 
          />
          <Route
            path='/play'
            element={<Play />} 
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
