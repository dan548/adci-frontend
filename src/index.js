import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import 'normalize.css';

import BaseLayout from './layouts/base/BaseLayout';
import Home from './pages/home/Home';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' render={() => (
        <BaseLayout>
          <Route exact path='/' component={Home}/>
          <Route exact path='/azienda'/>
        </BaseLayout>
      )}/>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));