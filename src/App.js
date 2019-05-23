import React from 'react';
import './App.css';
import classes from './assets/Global.module.css';
import HomeMovies from './components/HomeMovies';

function App() {
  return (
    <div className="App">
      <header className={classes.Header}>
        <i className="fa fa-film"></i> React Movie
      </header>
      <HomeMovies />
    </div>
  );
}

export default App;
