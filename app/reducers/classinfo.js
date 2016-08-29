import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
    createReducer,
}
from 'redux-immutablejs';

const initialState = Immutable.fromJS({
    classlist: [],
    total: 0,
});

export default createReducer(initialState, {

    [types.UPDATECLASSINFOSUCCESS]: (state, action) => state.merge({
        classlist: action.classlist,
        total: action.total,
    }),
    [types.FETCHCLASSDATASUCCESS]: (state, action) => state.merge({
        classlist: state.get('classlist').concat(action.classlist),
    }),
})