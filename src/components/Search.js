import React, {Component} from 'react';
import List from './List'
import { browserHistory, BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Search = (props) => {
    return ( 
        <div className="filter-list">
              <form>
              <fieldset className="form-group">
              <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={props.filterList}/>
              </fieldset>
              </form>
                    <List linkToMovie={props.linkToMovie} items={props.items}/>
            </div>
     );
}
 
export default Search;
