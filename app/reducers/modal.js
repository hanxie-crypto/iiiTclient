
import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
  createReducer,
}
from 'redux-immutablejs';
import  {
  Animated,
} from 'react-native';

const initialState = Immutable.fromJS({
    heightAnim: new Animated.Value(0),
    showchoosetype: false,
});

export default createReducer(initialState, {

  [types.OPENDIS]: (state, action) => state.merge({
    showchoosetype: true,

  }), 
  [types.CLOSEDIS]: (state, action) => state.merge({
    showchoosetype: false,
  }),
})

