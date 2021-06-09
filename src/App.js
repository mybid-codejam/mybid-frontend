import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import ObjekLelang from './pages/produkLelang';
import JadwalLelang from './pages/JadwalLelang';

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lelang/objek">
          <ObjekLelang />
        </Route>
        <Route path="/lelang/jadwal">
          <JadwalLelang />
        </Route>
      </Switch>
    </Router>
  );
}
