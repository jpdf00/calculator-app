import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import App from './App';
import Quote from './Quote';
import Error from './Error';

const Routes = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route exact path="/quote" component={Quote} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default Routes;
