import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { acceptResponse, parseResponseStr } from '../utility/response';

export const loadUserFromMemory = (sender = null) => ({
    type: types.LOAD_USER,
    sender,
});

export function signIn(username, password) {
    return (dispatch) => {
        fetch(`/${conf.api}/auth`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.SIGN_IN,
                value: data,
            }))
    };
}

export const signOut = () => ({
    type: types.SIGN_OUT,
});

export function signUp(username, password, nickname, email) {
    return (dispatch) => {
        fetch(`/${conf.api}/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                nickname,
                email,
            }),
        })
            .then((acceptResponse) => {
                signIn(username, password)(dispatch);
            })
    };
}
