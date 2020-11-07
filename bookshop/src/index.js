import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookshopService from './services/bookshop-service.js';
import { ServiceProvider } from './components/service-context';
import store from './store.js';

const bookshopService = new BookshopService();
console.log('Index',  bookshopService.getBooks);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
    <ServiceProvider value={bookshopService} >
      <Router>
        <App />
      </Router>
    </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

