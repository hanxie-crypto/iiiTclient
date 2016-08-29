import * as types from '../constants/ActionTypes';

import Server from '../config/server';
import Util from '../util/util';

function getTimeSuccess(data) {
	return {
		type: types.TABTWOSUCCESS,
		data: data
	}
}

function beginGetTime() {
	return {
		type: types.TABTWOBEGIN
	}
}


/**
 * @return {dispatch}
 * 通过使用中间件 redux-thunk,使得action creator 除了返回action对象外还能返回函数。
 * 这时action creator 就成为了thunk(形实替换程序)
 * 当 action creator返回函数的时候，这个函数会被redux thunk middleware.
 * 这个函数不需要保持纯净,它还可以带有副作用,包括执行异步api请求。这个函数还可以dispatch action
 * 就像dispatch 前面定义的同步action一样
 */
export function requestTime() {
	return (dispatch) => {
		dispatch(beginGetTime()); //启动异步的更新
		return Util.get(Server.findTime, null, function(data) {
			dispatch(getTimeSuccess(data))
		})
	}
}

/*dispatch(requestTime(dispatch) {
	dispatch(beginGetTime());
	return Util.get(Server.findTime, null, function(data) {
		dispatch(getTimeSuccess(data))
	})
})*/


export function tabnav(navtype) {
	switch (navtype) {
		case 'a':
			return {
				type: types.TABONE
			}
		case 'b':
			return {
				type: types.TABTWO
			}
		case 'c':
			return {
				type: types.TABTHREE
			}
		case 'd':
			return {
				type: types.TABFOUR
			}
		case 'e':
			return {
				type: types.TABFIVE
			}
	}
}