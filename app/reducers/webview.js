import * as types from '../constants/ActionTypes';


let DEFAULT_URL = 'http://designer.yoho.cn/bill';

const initialState = {
  url: DEFAULT_URL,
  status: 'No Page Loaded',
  backButtonEnabled: false,
  forwardButtonEnabled: false,
  loading: true,
  scalesPageToFit: true,
};

export default function webview(state = initialState, action = {}) {
  switch (action.type) {
    case types.WEBVIEWSHOW:
      return {
        ...state,
        backButtonEnabled: action.navState.canGoBack,
          forwardButtonEnabled: action.navState.canGoForward,
          url: action.navState.url,
          status: action.navState.title,
          loading: action.navState.loading,
          scalesPageToFit: true

      }
    case types.GOWEBVIEW:
     return {
       ...state,
       url: action.url
     }
    default:
      return state;
  }
}