import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Maynooth from './pages/Maynooth/Maynooth';
import RoarBikes from './pages/RoarBikes/RoarBikes';
import ChefRecipes from './pages/ChefRecipes/ChefRecipes';
import Home from './pages/Home/Home';
import Particles from 'react-particles-js';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const isPhone = md.phone() != null;

const particlesOptions = {
  particles: {
    number: {
      value: isPhone ? 50 : 120,
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
    <Particles className="particles" params={particlesOptions} />
    <Router>
      <Switch>
        <Route path="/maynooth">
          <Maynooth />
        </Route>
        <Route path="/roar-bikes">
          <RoarBikes />
        </Route>
        <Route path="/chef-recipes">
          <ChefRecipes />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);
