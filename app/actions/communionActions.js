import * as types from '../constants/ActionTypes';
import * as loading from './loadingActions';
import Immutable from 'immutable';
import httpClient from '../util/httpClient';
import {
    BASE_PATH
}
from '../../config';
import Promise from 'bluebird';

function updateFirstCommunionDataSuccess(communionlist, total) {
    return {
        type: types.UPDATEFIRSTCOMMUNIONDATASUCCESS,
        communionlist: communionlist,
        total: total,
    };
}



function fetchFirstCommunionDataSuccess(communionlist) {
    return {
        type: types.FETCHFIRSTCOMMUNIONDATASUCCESS,
        communionlist: communionlist,
    };
}

function updateSecondCommunionDataSuccess(seccommunionlist, total) {
    return {
        type: types.UPDATESECONDCOMMUNIONDATASUCCESS,
        secondcommunionlist: seccommunionlist,
        total: total,
    };
}



function fetchSecondCommunionDataSuccess(seccommunionlist) {
    return {
        type: types.FETCHSECONDCOMMUNIONDATASUCCESS,
        secondcommunionlist: seccommunionlist,
    };
}

function updateCommunionTypeDataSuccess(communiontypelist) {
    return {
        type: types.UPDATECOMMUNIONTYPESUCCESS,
        communiontypelist: communiontypelist,
    }
}
export function cleanSecCommunionData() {
    return {
        type: types.CLEANSECONDCOMMUNIONDATA
    }
}

/**
 * 更新数据
 * @return {[type]} [description]
 */
export function updateFirstCommunionData(params) {
        return dispatch => {
            dispatch(loading.beginLoading());

            httpClient.post(`${BASE_PATH}/communionfirstlist`, params).then(_data => {
                let resultdata = JSON.parse(_data);
                dispatch(loading.endLoading()); //关闭加载
                dispatch(updateFirstCommunionDataSuccess(resultdata.data, resultdata.total)); //合并数据

            }).catch(err => {
                console.log(err);
            })

        }
    }
    /**
     * 添加赞
     * @param {[type]} params [description]
     */
export function addCommunionPraise(params) {
        return dispatch => {
            httpClient.post(`${BASE_PATH}/addcommunionpraise`, params).then(_data => {
                let resultdata = JSON.parse(_data);
            }).catch(err => {
                console.log(err);
            })

        }
    }
    /**
     * 取消赞
     * @param {[type]} params [description]
     */
export function cancelCommunionPraise(params) {
    return dispatch => {
        httpClient.post(`${BASE_PATH}/cancelcommunionpraise`, params).then(_data => {
            let resultdata = JSON.parse(_data);
        }).catch(err => {
            console.log(err);
        })

    }
}

/**
 * 添加收藏
 * @param {[type]} params [description]
 */
export function addCommunionCollect(params) {
        return dispatch => {
            return new Promise(function(resolve, reject) {
                return httpClient.post(`${BASE_PATH}/addcommunioncollect`, params).then(_data => {
                    let resultdata = JSON.parse(_data);
                    resolve(resultdata.data);
                }).catch(err => {
                    reject(err);
                    console.log(err);
                })
            })

        }
    }
    /**
     * 取消收藏
     * @param {[type]} params [description]
     */
export function cancelCommunionCollect(params) {
        return dispatch => {
            return new Promise(function(resolve, reject) {
                httpClient.post(`${BASE_PATH}/cancelcommunioncollect`, params).then(_data => {
                    let resultdata = JSON.parse(_data);
                    resolve(resultdata.data);
                }).catch(err => {
                    console.log(err);
                    reject(err);
                })
            })
        }
    }
    /**
     * 抓取数据
     * @return {[type]} [description]
     */
export function fetchFirstCommunionData(params) {
        return dispatch => {
            dispatch(loading.startFetchLoading());
            httpClient.post(`${BASE_PATH}/communionfirstlist`, params).then(_data => {
                let resultdata = JSON.parse(_data);
                dispatch(loading.stopFetchLoading());
                dispatch(fetchFirstCommunionDataSuccess(resultdata.data));
            }).catch(err => {
                console.log(err);
            })

        }
    }
    /**
     * 更新子评论数据
     * @return {[type]} [description]
     */
export function updateSecondCommunionData(params) {
        return dispatch => {
            dispatch(loading.beginLoading());
            httpClient.post(`${BASE_PATH}/communionsecondlist`, params).then(_data => {
                let resultdata = JSON.parse(_data);
                dispatch(loading.endLoading()); //关闭加载
                dispatch(updateSecondCommunionDataSuccess(resultdata.data, resultdata.total)); //合并数据

            }).catch(err => {
                console.log(err);
            })

        }
    }
    /**
     * 抓取子评论数据
     * @return {[type]} [description]
     */
export function fetchSecondCommunionData(params) {
    return dispatch => {
        dispatch(loading.startFetchLoading());
        httpClient.post(`${BASE_PATH}/communionsecondlist`, params).then(_data => {
            let resultdata = JSON.parse(_data);
            dispatch(loading.stopFetchLoading());
            dispatch(fetchSecondCommunionDataSuccess(resultdata.data));
        }).catch(err => {
            console.log(err);
        })

    }
}

/**
 * 交流类型
 * @return {[type]} [description]
 */
export function updateCommunionTypeData() {
        return dispatch => {

            httpClient.get(`${BASE_PATH}/findcommuniontypes`, {}).then(_data => {
                let resultdata = JSON.parse(_data);
                dispatch(updateCommunionTypeDataSuccess(resultdata.data)); //合并数据

            }).catch(err => {
                console.log(err);
            })

        }
    }
    /**
     * 切换交流类型
     * @param  {[type]} communiontype [description]
     * @return {[type]}               [description]
     */
export function changCommunionType(communiontype) {
        return {
            type: types.CHANGECOMMUNIONTYPE,
            communiontype: communiontype,
        }
    }
    /**
     * 添加交流
     * @param {[type]} params [description]
     */
export function addCommunion(params) {
        return dispatch => {
            return httpClient.post(`${BASE_PATH}/addcommunion`, params);
        }
    }
    /**
     * 添加交流评论
     * @param {[type]} params [description]
     */
export function addCommunionChild(params) {
        return dispatch => {
            return httpClient.post(`${BASE_PATH}/addcommunionchild`, params);
        }
    }
    /**
     * 添加交流的图片
     * @param {[type]} skillsrc [description]
     */
export function addCommunionImg(communionsrc) {
        return {
            type: types.ADDCOMMUNIONIMG,
            communionimg: communionsrc,
        }
    }
    /**
     * 清空交流图片
     * @return {[type]} [description]
     */
export function cleanCommunionImg() {
    return {
        type: types.CLEANALLCOMMUNIONIMG,
    }
}

function collectSuccess() {
    return {
        type: types.HASCOLLECT,
    }
}

function collectNotSuccess() {
        return {
            type: types.HASNOTCOLLECT,
        }
    }
    /**
     * 检查是否已经收藏
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
export function checkCommunionCollect(params) {
    return dispatch => {
        httpClient.post(`${BASE_PATH}/checkcommunioncollect`, params).then(_data => {
            let resultdata = JSON.parse(_data);
            console.log(resultdata.data.userid);
            if (resultdata.data.userid) {
                dispatch(collectSuccess()); //
            } else {
                dispatch(collectNotSuccess()); //
            }

        }).catch(err => {
            console.log(err);
        });
    }
}