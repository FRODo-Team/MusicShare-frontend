import * as types from '../constants/ActionTypes';

const initialState = null;

export default function currentPlaylist(state = initialState, action) {
    switch (action.type) {
    case types.SET_CURRENT_PLAYLIST:
        return action.value;
    default:
        return state;
    }
}
