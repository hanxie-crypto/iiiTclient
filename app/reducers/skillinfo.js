import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
    createReducer,
}
from 'redux-immutablejs';

const initialState = Immutable.fromJS({
    skilllist: [],
    total: 0,
    addskillimg:[],
    nowskilltype: {
        skilltype: '',
        skilltypeid: null,
    },
    skilltypelist: [],
});

export default createReducer(initialState, {

    [types.UPDATESKILLINFOSUCCESS]: (state, action) => state.merge({
        skilllist: action.skilllist,
        total: action.total,
    }),
    [types.FETCHSKILLDATASUCCESS]: (state, action) => state.merge({
        skilllist: state.get('skilllist').concat(action.skilllist),
    }),
    [types.CLEANALLSKILLIMG]: (state,action) => state.merge({
        addskillimg:[]
    }),
    [types.ADDSKILLIMG]: (state,action) => state.merge({
        addskillimg:state.get('addskillimg').push(action.skillimg)
    }),
    [types.UPDATESKILLTYPESUCCESS]: (state,action) => state.merge({
        skilltypelist: action.skilltypelist,
    }),
    [types.CHANGESKILLTYPE]: (state,action) => state.merge({
        nowskilltype: action.skilltype
    })
})