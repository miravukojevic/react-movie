import React, {Component} from 'react';
import classes from '../assets/Global.module.css';
import { browserHistory, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SingleMovie from './SingleMovie';



class HomeMovies extends Component {
    state = { 
        movies: [],
        avatarUrl: [],
        page: 1,
        updatedMoviesArray: []
     }
    componentDidMount = () => {
        this.fetchData()
    }
    fetchData = () => {
        fetch( `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${this.state.page}`)
        .then(response => response.json())
        .then(response => {
          this.setState(state => {
              return { movies: state.movies.concat(response.results) }
          })
         })
    }
    fetchDataOnLoadMore =() => {
        
        this.setState(state => {
            return {
                page: state.page + 1,
               
            };
          }, () => {
            this.fetchData()
          });
          
        // this.setState({
        //     movies: this.state.movies,
        //     page: this.state.page + 1,
        //   })
         
    }
    render() { 
        if (this.state.movies.length > 0){
            return ( 
           
                <div>
                    <div className="row">
                        <div className={classes.firstMovie} style={{
                            backgroundImage: `url("https://image.tmdb.org/t/p/original${this.state.movies[0].backdrop_path}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <div className={classes.firstText}>
                                <h1>{this.state.movies[0].original_title}</h1>
                                {this.state.movies[0].overview}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {this.state.movies.map((mira, key) =>
                            <div className="col-sm-3">
                                <Link to={{
                                    pathname: `single-movie/${mira.id}`,
                                    state: {
                                        mira
                                    }
                                }}>
                                    {mira.name}
                                    <img className={classes.img} key={key}  src={`https://image.tmdb.org/t/p/w500${mira.poster_path}`}/>
                                </Link>
                                
                            </div>)}
                    </div>
                    {/* {
                    this.state.avatarUrl && <img src={`https://image.tmdb.org/t/p/w500/${this.state.avatarUrl[0].id}`} width="60" />} */}
                    
                <button className="btn btn-primary" onClick={this.fetchDataOnLoadMore}>LOAD MORE MOVIES</button>
                </div>
       
             );
        } else {
            return <div style={{background: 'black',
                                height: '100vh',
                                fontSize: '60px'
                                }}> <i className="fa fa-refresh"></i> LOADING!!!</div>
        }
        
    }
}
 
export default HomeMovies;