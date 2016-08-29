/**
 * 检测网络状态
 */
import * as types from '../constants/ActionTypes';



export function wifiState() {
     return {
            type: types.WIFISTATE,
        };
}

export function unWifiState() {
     return {
            type: types.UNWIFISTATE,
        };
}