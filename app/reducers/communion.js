import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import {
    createReducer,
}
from 'redux-immutablejs';

const initialState = Immutable.fromJS({
    firstcommunionlist: [],
    secondcommunionlist:[],
    total: 0,
    sectotal: 0,
    nowcommuniontype: {
        communiontype: '',
        communiontypeid: null,
    },
    addcommunionimg:[],
    communiontypelist: [],
    hascollect: false,
});

export default createReducer(initialState, {

    [types.UPDATEFIRSTCOMMUNIONDATASUCCESS]: (state, action) => state.merge({
        firstcommunionlist: action.communionlist,
        total: action.total,
    }),
    [types.FETCHFIRSTCOMMUNIONDATASUCCESS]: (state, action) => state.merge({
        firstcommunionlist: state.get('firstcommunionlist').concat(action.communionlist),
    }),

    [types.UPDATESECONDCOMMUNIONDATASUCCESS]: (state, action) => state.merge({
        secondcommunionlist: action.secondcommunionlist,
        sectotal: action.total,
    }),
    [types.FETCHSECONDCOMMUNIONDATASUCCESS]: (state, action) => state.merge({
        secondcommunionlist: state.get('secondcommunionlist').concat(action.secondcommunionlist),
    }),
    [types.CLEANSECONDCOMMUNIONDATA]: (state, action) => state.merge({
        secondcommunionlist: [],
        sectotal: 0,
    }),
    [types.UPDATECOMMUNIONTYPESUCCESS]: (state,action) => state.merge({
        communiontypelist: action.communiontypelist,
    }),
    [types.CHANGECOMMUNIONTYPE]: (state,action) => state.merge({
        nowcommuniontype: action.communiontype
    }),
    [types.CLEANALLCOMMUNIONIMG]: (state,action) => state.merge({
        addcommunionimg:[]
    }),
    [types.ADDCOMMUNIONIMG]: (state,action) => state.merge({
        addcommunionimg:state.get('addcommunionimg').push(action.communionimg)
    }),
    [types.HASCOLLECT]: (state,action) => state.merge({
        hascollect: true,
    }),
    [types.HASNOTCOLLECT]: (state,action) => state.merge({
        hascollect: false,
    }),
})