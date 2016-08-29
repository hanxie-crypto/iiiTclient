import * as types from '../constants/ActionTypes';

import Immutable from 'immutable';

const initialState = {
  selectedTab: 'c',
  notifCount: 0,
  message: 'ss',
  timedata: []
};

export default function tabbar(state = initialState, action = {}) {
  switch (action.type) {
    case types.TABONE:
      return {
        ...state,
        selectedTab: 'a',
        timedata: []
      }
    case types.TABTWO:
      return {
        ...state,
          selectedTab: 'b',
          timedata: []
      }
    case types.TABTHREE:
      return {
        ...state,
        selectedTab: 'c',
        timedata: []
      }
    case types.TABFOUR:
      return {
        ...state,
        selectedTab: 'd',
        timedata: []
      }
    case types.TABFIVE:
      return {
        ...state,
        selectedTab: 'e',
        timedata: []
      }
    case types.TABTWOBEGIN:
      return {
        ...state,
        selectedTab: 'redTab',
          notifCount: 0,
          message: '开始',
          timedata: []
      }
    case types.TABTWOSUCCESS:
      return {
        ...state,
        selectedTab: 'redTab',
          notifCount: 0,
          timedata: action.data.datas,
          message: '成功' + action.data.message
      }
    default:
      return state;
  }
}