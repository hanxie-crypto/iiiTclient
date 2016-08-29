/*import * as types from '../constants/ActionTypes';


const initialState = {
  navture: false,
};

export default function navui(state = initialState, action = {}) {
  switch (action.type) {
    case types.NAVTURE:
      return {
        ...state,
        navture: true,
      }
    case types.NAVFALSE:
      return {
        ...state,
        navture: false,
      }
    default:
      return state;
  }
}*/


import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
  createReducer,
}
from 'redux-immutablejs';

const initialState = Immutable.fromJS({
    navture: false,
});

export default createReducer(initialState, {

  [types.NAVTURE]: (state, action) => state.merge({
    navture: true,
  }), [types.NAVFALSE]: (state, action) => state.merge({
    navture: false,
  }),
})

