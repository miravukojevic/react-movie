import React from 'react';
import classes from '../assets/Global.module.css';

const Actor = (props) => {
    return ( 
        <div className={classes.singleActor}>
             <img className={classes.actorImg} src={`https://image.tmdb.org/t/p/w500${props.img_path}`} />
             <h3>{props.actor_name}</h3>
             <p>{props.gender}</p>
             <div style={{clear: 'both'}}></div>
        </div> );
}
 
export default Actor;