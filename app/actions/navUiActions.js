import * as types from '../constants/ActionTypes';



export function loadTureNav() {
     return {
            type: types.NAVTURE,
        };
}

export function loadFalseNav() {
     return {
            type: types.NAVFALSE,
        };
}