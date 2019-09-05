import React, {Component} from 'react';
import classes from '../assets/Global.module.css';
import { browserHistory, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Search from './Search'



class HomeMovies extends Component {
    state = { 
        movies: [],
        avatarUrl: [],
        page: 1,
        updatedMoviesArray: [],
        items: []
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
    }
    filterList = (event) => {
        var updatedList = this.state.movies;
        updatedList = updatedList.filter(function(item){
          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        }).map(name => name);
        this.setState(state => {
            return {
                items: updatedList,
                movies: state.movies.filter(item => <div className="col-sm-3">
                    <Link to={{
                        pathname: `single-movie/${item.id}`,
                        state: {
                            item
                        }
                    }}>
                        {item.title}
                    </Link>
            </div>)
            }
        });
    }
      
    componentWillMount = () =>{
        this.setState({items: this.state.movies})
    }
    render() { 
        if (this.state.movies.length > 0){
            return ( 
           
                <div>
                    <Search  filterList={this.filterList}  linkToMovie={this.linkToMovie} items={this.state.items}/>
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
                        {this.state.movies.map((item, key) =>
                            <div className="col-sm-3">
                                <Link to={{
                                    pathname: `single-movie/${item.id}`,
                                    state: {
                                        item
                                    }
                                }}>
                                    {item.name}
                                    <img className={classes.img} key={key}  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                                </Link>
                            </div>)}
                    </div>
                    
                <button className="btn btn-primary" onClick={this.fetchDataOnLoadMore}>LOAD MORE MOVIES</button>
                </div>
       
             );
        } else {
           return(
            <div class="row">
                {this.state.updatedMoviesArray.map(movie => console.log('MOVIE', movie))}
                        {this.state.items.map((mira, key) =>
                            console.log('MIRA',mira))}
                    </div>
                    
            )
        }
    }
}
 
export default HomeMovies;