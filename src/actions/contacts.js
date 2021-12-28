import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { acceptResponse } from '../utility/response';

export function getContacts(nickname = null) {
    var search = '';
    if (nickname) {
        var searchParams = new URLSearchParams();
        searchParams.append('nickname', nickname);
        search = '?' + searchParams.toString();
    }

    return (dispatch) => {
        fetch(`/${conf.api}/users${search}`, {
            method: 'GET',
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.GET_CONTACTS,
                value: data,
            }))
    }
}
