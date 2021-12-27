import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { acceptResponse } from '../utility/response';

export function getSongs(artist, title) {
    let search = '';

    if (artist || title) {
        var searchParams = new URLSearchParams();
        if (artist && artist != '') {
            searchParams.append('artist', artist)
        }
        if (title && title != '') {
            searchParams.append('title', title)
        }
        search = '?' + searchParams.toString();
    }

    return (dispatch) => {
        fetch(`/${conf.api}/songs${search}`, {
            method: 'GET',
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.GET_SONGS,
                value: data,
            }))
    }
}
