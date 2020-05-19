import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maynooth from './pages/Maynooth/Maynooth';
import RoarBikes from './pages/RoarBikes/RoarBikes';
import ChefRecipes from './pages/ChefRecipes/ChefRecipes';
import Home from './pages/Home/Home';
import Particles from 'react-particles-js';
const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_are: 800,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

export default () => (
  <>
    <Particles className='particles' params={particlesOptions} />
    <Router>
      <Switch>
        <Route path='/maynooth'>
          <Maynooth />
        </Route>
        <Route path='/roar-bikes'>
          <RoarBikes />
        </Route>
        <Route path='/chef-recipes'>
          <ChefRecipes />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);
