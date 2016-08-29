


import React, {
    Component,
} from 'react';

import { createStore, applyMiddleware, } from 'redux';
import {combineReducers} from 'redux-immutablejs';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk'; 

import * as reducers from '../reducers';
import {is} from 'immutable';
import IiitApp from './IiitApp';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleWare)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
      return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
  }
  render() {
    return (
      <Provider store={store}>
        <IiitApp />
      </Provider>
    );
  }
}