import React from 'react';
import './app.scss';
import { withService } from '../hoc';
import { Switch, Route } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
const App = ({ bookshopService }) => {
  console.log(bookshopService.getBooks());
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route path="/"
        component={HomePage}
        exact />
         <Route path="/cart"
        component={CartPage}
        />
      </Switch>

    </main>
  );
}

export default withService()(App);
