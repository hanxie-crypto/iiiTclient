import * as types from '../constants/ActionTypes';
import * as loading from './loadingActions';
import Immutable from 'immutable';
import httpClient from '../util/httpClient';
import {BASE_PATH} from '../../config';


function updateSkillDataSuccess(skilllist,total) {
  return {
    type: types.UPDATESKILLINFOSUCCESS,
    skilllist: skilllist,
    total: total,
  };
}

function updateSkillTypeDataSuccess(skilltypelist) {
    return {
        type: types.UPDATESKILLTYPESUCCESS,
        skilltypelist: skilltypelist,
    }
}

function fetchSkillDataSuccess(skilllist) {
    return {
        type: types.FETCHSKILLDATASUCCESS,
        skilllist: skilllist,
    };
}

function addSkillSuccess() {
    return {
        type: types.ADDSKILLSUCCESS,
    }
}   
/**
 * 更新数据
 * @return {[type]} [description]
 */
export function updateSkillData(params) {
    return dispatch=> {
        dispatch(loading.beginLoading());

        httpClient.post(`${BASE_PATH}/skill`,params).then(_data=>{
             let resultdata = JSON.parse(_data);
             dispatch(loading.endLoading()); //关闭加载
             dispatch(updateSkillDataSuccess(resultdata.data,resultdata.total)); //合并数据
             
        }).catch(err=>{
            console.log(err);
        })
       
    }
}
/**
 * 抓取数据
 * @return {[type]} [description]
 */
export function fetchSkillData(params) {
    return dispatch=> {
        dispatch(loading.startFetchLoading());
        httpClient.post(`${BASE_PATH}/skill`,params).then(_data=>{
             let resultdata = JSON.parse(_data);
             dispatch(loading.stopFetchLoading());
             dispatch(fetchSkillDataSuccess(resultdata.data));
        }).catch(err=>{
            console.log(err);
        })
       
    }
}
/**
 * 添加技巧的图片
 * @param {[type]} skillsrc [description]
 */
export function addSkillImg(skillsrc) {
    return {
        type: types.ADDSKILLIMG,
        skillimg: skillsrc,
    }
}
/**
 * 清空技巧图片
 * @return {[type]} [description]
 */
export function cleanSkillImg() {
    return {
        type: types.CLEANALLSKILLIMG,
    }
}
/**
 * 添加技巧
 * @param {[type]} params [description]
 */
export function addSkill(params) {
    return dispatch=> {
        return httpClient.post(`${BASE_PATH}/addskill`,params);
    }
}

export function changSkillType(skilltype) {
    return {
        type: types.CHANGESKILLTYPE,
        skilltype: skilltype,
    }
}
export function updateSkillTypeData() {
     return dispatch=> {

        httpClient.get(`${BASE_PATH}/skilltypes`,{}).then(_data=>{
             let resultdata = JSON.parse(_data);
             dispatch(updateSkillTypeDataSuccess(resultdata.data)); //合并数据
             
        }).catch(err=>{
            console.log(err);
        })
       
    }
}