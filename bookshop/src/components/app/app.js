import React from 'react';
import './app.scss';
import { withService } from '../hoc';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
const App = ({ bookshopService }) => {
  console.log(bookshopService.getBooks());
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello redux</h1>
      </header>
      <Switch>
        <Route path="/"
        component={HomePage}
        exact />
         <Route path="/cart"
        component={CartPage}
        />
      </Switch>

    </div>
  );
}

export default withService()(App);
