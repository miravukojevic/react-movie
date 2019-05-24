import React, {Component} from 'react';
import classes from '../assets/Global.module.css';

class HomeMovies extends Component {
    state = { 
        movies: [],
        avatarUrl: []
     }
    componentDidMount = () => {
        this.fetchData()
    }
    fetchData = () => {
        fetch( 'https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1')
        .then(response => response.json())
        .then(response => {
          this.setState({
            movies: response.results,
          })
          console.log(this.state.movies)
          console.log('avatar url',this.state.avatarUrl)
         })
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
                     {this.state.movies.map((mira, key) => <div className="col-sm-3"><img key={key}  src={`https://image.tmdb.org/t/p/w500${mira.poster_path}`}/></div>)}
                    </div>
                    {/* {
                    this.state.avatarUrl && <img src={`https://image.tmdb.org/t/p/w500/${this.state.avatarUrl[0].id}`} width="60" />} */}
                    
                </div>
             );
        } else {
            return <div>LOADING!!!</div>
        }
        
    }
}
 
export default HomeMovies;