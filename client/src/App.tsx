import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core modules/Home';
import AddTodo from './core modules/AddTodo';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-todo" exact component={AddTodo} />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
