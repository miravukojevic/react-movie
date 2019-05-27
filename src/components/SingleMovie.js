import React, {Fragment , useState, useEffect } from 'react';
import classes from '../assets/Global.module.css';
import Actor from './Actor'
import axios from 'axios';

const SingleMovie = (props) => {
    // state = {
    //     actors: []
    // }
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://api.themoviedb.org/3/movie/${props.location.state.mira.id}/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335`
          );
          console.log(result.data)
          setData(result.data);
        };
        fetchData();
      }, []);
      
    return ( 
        <Fragment>
        <div style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${props.location.state.mira.backdrop_path}")`,
            padding: '40px 0'
        }} >
             {console.log('RENDEr', data)}
            <div className={classes.singleMovie}>
                <img width="300px" className={classes.singleImg} src={`https://image.tmdb.org/t/p/w500${props.location.state.mira.poster_path}`}/>
                <h1> {props.location.state.mira.original_title}</h1>
                {props.location.state.mira.overview}
                <div style={{clear: 'both'}} ></div>
            </div>
            
        </div>
        <h1>Actors</h1>
        <div className="row actors">
        
                {/* {data.cast.map(castSingle => <div>{castSingle.character}</div>)} */}

                    { data.cast && data.cast.map(item => (
                        <div className="col-sm-3" key={item.cast_id}>
                            <Actor actor_name={item.name} img_path={item.profile_path} gender={item.gender === 2 ? 'male' : 'female'}/>
                        </div>
                        ))}
        </div>
        </Fragment>
     );
}
 
export default SingleMovie;