import React from 'react';
import './App.css';
import classes from './assets/Global.module.css';
import HomeMovies from './components/HomeMovies';
import SingleMovie from './components/SingleMovie';
import { browserHistory, BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className={classes.Header}>
        <a href="/" style={{
          color: 'white',
          textDecoration: 'none'
        }}>
         <i className="fa fa-film"></i> React Movie
        </a>
      </header>
      <Router>
        <Route exact path="/" component={HomeMovies} className={classes.Header}/>
        <Route exact path={'/single-movie/:id'} component={SingleMovie} />
      </Router>
      
      {/* <HomeMovies /> */}
    </div>
  );
}

export default App;
