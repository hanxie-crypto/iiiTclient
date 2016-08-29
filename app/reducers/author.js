import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
    createReducer,
}
from 'redux-immutablejs';


const initialState = Immutable.fromJS({
    user: {},
    isopenlogin: false,
});

export default createReducer(initialState, {

    [types.LOGINSUCCESS]: (state, action) => state.merge({
        user: action.user,
        isopenlogin: false,
    }),
    [types.LOGOUTSUCCESS]: (state, action) => state.merge({
        user: {},
    }),
    [types.GETUSERSUCCESS]: (state, action) => state.merge({
        user: action.user,
    }),
    [types.CLOSELOGINMODAL]: (state, action) => state.merge({
        isopenlogin: false,
    }),
    [types.OPENLOGINMODAL]: (state, action) => state.merge({
        isopenlogin: true,
    }),
})