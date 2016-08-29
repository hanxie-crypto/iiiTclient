import * as types from '../constants/ActionTypes';
import * as loading from './loadingActions';
import Immutable from 'immutable';
import httpClient from '../util/httpClient';
import {
    BASE_PATH
}
from '../../config';
import Storage from '../util/Storage';

/**
 * 发送验证码
 * @param {[type]} params [description]
 */
export function sendVcode(params) {
    return dispatch => {
        return httpClient.post(`${BASE_PATH}/getValidateCode`, params);
    }
}


export function loginSuccess(user) {
    return {
        type: types.LOGINSUCCESS,
        user: user,
    };
}



/**
 * 登录
 * @return {[type]} [description]
 */
export function login(params) {
    return dispatch => {
          
            return httpClient.post(`${BASE_PATH}/login`, params);
            
    }
}
/**
 * 登出
 * @return {[type]} [description]
 */
export function logOutSuccess() {
    Storage.setItem('user', {});
    return {
        type: types.LOGOUTSUCCESS,
    }
}
export function getUser(user) {
    return {
        type: types.GETUSERSUCCESS,
        user: user,
    };
}
export function openLoginModal() {
    return {
        type: types.OPENLOGINMODAL,
    }
}