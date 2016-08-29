import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
    createReducer,
}
from 'redux-immutablejs';

const initialState = Immutable.fromJS({
    topLoading: false,
    bottomLoading: false,
});

export default createReducer(initialState, {

    [types.BEGINLOADING]: (state, action) => state.merge({
        topLoading: true,
    }),
    [types.ENDLOADING]: (state, action) => state.merge({
        topLoading: false,
    }),
    [types.STARTFETCHLOADING]: (state, action) => state.merge({
        bottomLoading: true,
    }),
    [types.STOPFETCHLOADING]: (state, action) => state.merge({
        bottomLoading: false,
    }),
})