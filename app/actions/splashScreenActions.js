import * as types from '../constants/ActionTypes';

import Util from '../util/util';
import Server from '../config/server';


export function getCover() {

    Util.post(Server.findCover, null, function(data) {
        return {
            type: types.GETCOVER,
            data: data
        };
    })

}