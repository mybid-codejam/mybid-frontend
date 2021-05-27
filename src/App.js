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
        <Route path="/lelang/objek">
          <About />
        </Route>
        <Route path="/lelang/jadwal">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
