import React from 'react';
import './app.scss';
import { withService } from '../hoc';
const App = ({ bookshopService }) => {
  console.log(bookshopService.getBooks());
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello redux</h1>
      </header>
    </div>
  );
}

export default withService()(App);
