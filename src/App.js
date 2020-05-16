import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maynooth from './pages/Maynooth/Maynooth';
import RoadBikes from './pages/RoadBikes/RoadBikes';
import ChefRecipes from './pages/ChefRecipes/ChefRecipes';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

export default () => (
  <Router>
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
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
