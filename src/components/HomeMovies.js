import React, {Component} from 'react';

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
            movies: response,
            avatarUrl: response.backdrop_path
          })
          console.log(this.state.movies)
         })
    }
    render() { 
        return ( 
            <div>
                <img src={require(`img/${this.state.avatarUrl}`)} width="60" />
            </div>
         );
    }
}
 
export default HomeMovies;