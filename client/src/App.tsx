import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './core modules/Layout';
import Home from './core modules/Home';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
