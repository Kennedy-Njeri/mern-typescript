import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core modules/Home';
import AddTodo from './core modules/AddTodo';
import UpdateTodo from './core modules/UpdateTodo'


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-todo" exact component={AddTodo} />
            <Route path="/update-todo/:id" exact component={UpdateTodo} />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
