import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import ObjekLelang from './pages/produkLelang';
import JadwalLelang from './pages/JadwalLelang';
import Prosedur from './pages/prosedur';
import DetailProduct from './pages/detailProduct';

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
        <Route path="/prosedur">
          <Prosedur />
        </Route>
        <Route path="/asset/:id">
          <DetailProduct />
        </Route>
      </Switch>
    </Router>
  );
}
