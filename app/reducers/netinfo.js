import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
  createReducer,
}
from 'redux-immutablejs';

const initialState = Immutable.fromJS({
  iswifi: false,
});

export default createReducer(initialState, {

  [types.WIFISTATE]: (state, action) => state.merge({
    iswifi: true,
  }), [types.UNWIFISTATE]: (state, action) => state.merge({
    iswifi: false,
  }),
})


/*export default function netinfo(state = initialState, action = {}) {
  switch (action.type) {
    case types.WIFISTATE:
      return {
        ...state,
        iswifi: true,
      }
    case types.UNWIFISTATE:
      return {
        ...state,
        iswifi: false,
      }
    default:
      return state;
  }
}*/