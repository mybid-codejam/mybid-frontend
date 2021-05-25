import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/objeklelang">
          <About />
        </Route>
        <Route path="/jadwallelang">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
