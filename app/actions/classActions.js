import * as types from '../constants/ActionTypes';
import * as loading from './loadingActions';
import Immutable from 'immutable';
import httpClient from '../util/httpClient';
import {BASE_PATH} from '../../config';
function updateClassDataSuccess(classlist,total) {
  return {
    type: types.UPDATECLASSINFOSUCCESS,
    classlist: classlist,
    total: total,
  };
}



function fetchClassDataSuccess(classlist) {
    return {
        type: types.FETCHCLASSDATASUCCESS,
        classlist: classlist,
    };
}


let mock_upd_data =[{name:'a',title:'a'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'}];
let mock_fetch_data =[{name:'a',title:'a'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'},{name:'b',title:'b'}];
/**
 * 更新数据
 * @return {[type]} [description]
 */
export function updateClassData(params) {
    return dispatch=> {
        dispatch(loading.beginLoading());

        httpClient.post(`${BASE_PATH}/courselist`,params).then(_data=>{
             let resultdata = JSON.parse(_data);
             dispatch(loading.endLoading()); //关闭加载
             dispatch(updateClassDataSuccess(resultdata.data,resultdata.total)); //合并数据
             
        }).catch(err=>{
            console.log(err);
        })
       
    }
}
/**
 * 抓取数据
 * @return {[type]} [description]
 */
export function fetchClassData(params) {
    return dispatch=> {
        dispatch(loading.startFetchLoading());
        httpClient.post(`${BASE_PATH}/courselist`,params).then(_data=>{
             let resultdata = JSON.parse(_data);
             dispatch(loading.stopFetchLoading());
             dispatch(fetchClassDataSuccess(resultdata.data));
        }).catch(err=>{
            console.log(err);
        })
       
    }
}

