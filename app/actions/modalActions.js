import * as types from '../constants/ActionTypes';



export function openDisCusModal() {
     return {
            type: types.OPENDIS,
        };
}

export function closeDisCusModal() {
     return {
            type: types.CLOSEDIS,
        };
}

export function openHeightModal() {
    return {
        type: types.OPENHEIGHTANIMA,
    }
}

export function closeHeightModal() {
    return {
        type: types.CLOSEHEIGHTANIMA,
    }
}