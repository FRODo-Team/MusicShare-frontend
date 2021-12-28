import * as types from '../constants/ActionTypes';
import * as conf from '../config';

import { acceptResponse, parseResponseStr } from '../utility/response';

export function getPlaylists() {
    return (dispatch) => {
        fetch(`/${conf.api}/playlists`, {
            method: 'GET',
        })
            .then(acceptResponse)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: types.GET_PLAYLISTS,
                value: data,
            }))
    };
}

export function addSong(playlistId, ...songIds) {
    return (dispatch) => {
        fetch(`/${conf.api}/playlists/${playlistId}/songs`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                songIds,
            }),
        })
            .then(acceptResponse)
            .then(() => {
                getPlaylists()(dispatch);
            })
    };
}

export function removeSong(playlistId, songId) {
    return (dispatch) => {
        fetch(`/${conf.api}/playlists/${playlistId}/songs/${songId}`, {
            method: 'DELETE',
        })
            .then(acceptResponse)
            .then(() => {
                getPlaylists()(dispatch);
            })
    };
}

export function createPlaylist(name) {
    return (dispatch) => {
        fetch(`/${conf.api}/playlists`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                songDto: {
                    songIds: [],
                },
            }),
        })
            .then(acceptResponse)
            .then(() => {
                getPlaylists()(dispatch);
            })
    };
}
