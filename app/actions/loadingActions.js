
import * as types from '../constants/ActionTypes';


export function beginLoading() {
    return {
        type: types.BEGINLOADING,
    };
}
export function endLoading() {
    return {
        type: types.ENDLOADING,
    };
}

export function startFetchLoading() {
    return {
        type: types.STARTFETCHLOADING,
    };
}

export function stopFetchLoading() {
    return {
        type: types.STOPFETCHLOADING,
    };
}   