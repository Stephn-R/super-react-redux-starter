'use strict';

import './theme/styles.scss';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

/*= End of MODULES =*/
/*=============================================<<<<<*/

import { routes } from './routes';
import { composeStore, displayApp } from './config';

/*----------- PREPARE COMPONENTS/REDUCERS/ETC -----------*/

const store = composeStore();
const history = syncHistoryWithStore(browserHistory, store);

/*----------- RENDER APP -----------*/

const MOUNT_NODE = document.getElementById('app');

displayApp(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
  , MOUNT_NODE
);
