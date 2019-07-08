import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import BaseLayout from './layouts/base/BaseLayout';

import store from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' render={() => (
        <BaseLayout>
          <Route exact path='/'/>
          <Route exact path='/azienda'/>
        </BaseLayout>
      )}/>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));