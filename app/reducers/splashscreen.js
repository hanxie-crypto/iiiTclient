import * as types from '../constants/ActionTypes';

import {Animated} from 'react-native';
const initialState = {
  bounceValue: new Animated.Value(1),
  cover: {
    text: 'hehe',
    img: 'http://img13.static.yhbimg.com/taobaocms/2016/02/16/06/02108cb3aa73229d083c6bc5bb5c76788d.jpg'
  }
};

export default function splashscreen(state = initialState, action = {}) {
  switch (action.type) {
    case types.GETCOVER:
      return {
        ...state,
        bounceValue: 1,
          cover: {
            text: action.data.text,
            img: action.data.img
          }
      }
    default:
      return state;
  }
}