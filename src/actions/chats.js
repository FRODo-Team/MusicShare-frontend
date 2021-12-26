import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { acceptResponse, parseResponseStr } from '../utility/response';

export function updateMessages(since = null) {
    let search = ''
    if (since) {
        let searchParams = new URLSearchParams();
        searchParams.append('since', since);
        search = '?' + searchParams.toString();
        console.log(11)
    }

    return (dispatch) => {
        fetch(`/${conf.api}/users/messages${search}`, {
            method: 'GET',
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.UPDATE_MESSAGES,
                value: data,
            }))
    };
}

export function getChats() {
    return (dispatch) => {
        fetch(`/${conf.api}/chats`, {
            method: 'GET',
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.GET_CHATS,
                value: data,
            }))
            .then(() => {
                updateMessages()(dispatch);
            })
    };
}
