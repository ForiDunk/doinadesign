import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Maynooth from './pages/Maynooth';
import RoadBikes from './pages/RoadBikes';
import ChefRecipes from './pages/ChefRecipes';
import Home from './pages/Home';

export default () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/maynooth'>Maynooth</Link>
          </li>
          <li>
            <Link to='/road-bikes'>Road Bikes</Link>
          </li>
          <li>
            <Link to='/chef-recipes'>Chef Recipes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/maynooth'>
          <Maynooth />
        </Route>
        <Route path='/road-bikes'>
          <RoadBikes />
        </Route>
        <Route path='/chef-recipes'>
          <ChefRecipes />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
