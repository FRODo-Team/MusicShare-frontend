import * as types from '../constants/ActionTypes';

import { fromJS, Map as ImMap } from 'immutable';

const initialState = ImMap({});

export default function playlists(state = initialState, action) {
    switch (action.type) {
    case types.GET_PLAYLISTS:
        var playlists = new Map();
        for (const playlist of action.value) {
            playlists.set(playlist.id, playlist)
        }
        return fromJS(playlists);
    default:
        return state;
    }
}
