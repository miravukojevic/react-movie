import React, {Component} from 'react';
import { browserHistory, BrowserRouter as Router, Link, Route } from 'react-router-dom';

const List = (props) => {
    return ( 
        <div >
                {
                props.items.map(function(item) {
                    return <div className="col-sm-3"><Link to={{
                        pathname: `/single-movie/${item.id}`,
                        state: {
                            item
                        }
                    }}>{item.title}</Link></div>
                })
                }
        </div>
     );
}
 
export default List;