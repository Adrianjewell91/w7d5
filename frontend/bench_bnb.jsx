import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

import * as Util from './util/bench_api_util';
// import * as Actions from './actions/session_actions';
import {fetchBenches} from './util/bench_api_util.js';
import * as BenchActions from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;

  if (window.currentUser) {
    const preLoadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //tests
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.Actions = BenchActions;
  window.Util = Util;
  window.fetchBenches = fetchBenches;

  // render the root form
  ReactDOM.render(<Root store={store} />, root);
});
