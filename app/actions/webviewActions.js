import * as types from '../constants/ActionTypes';


export function getWebView(navState) {
    return {
        type: types.WEBVIEWSHOW,
        navState: navState
    }
}

export function goWebView(url) {
     return {
        type: types.GOWEBVIEW,
        url: url
    }
}