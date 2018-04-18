import { createStore } from 'redux';

import actions from './actions';
import actionTypes from './actionTypes';
import reducers from './reducers';

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const isDev = process.env.NODE_ENV === 'development';
const hasReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line
const reduxDevTools = hasReduxDevTools && window.__REDUX_DEVTOOLS_EXTENSION__()  // eslint-disable-line
const store = createStore(
  counter,
  hasReduxDevTools && isDev && reduxDevTools,
);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
// store.subscribe(() => console.log(store.getState()));

export {
  actions,
  actionTypes,
  reducers,
  store,
};

export default store;
