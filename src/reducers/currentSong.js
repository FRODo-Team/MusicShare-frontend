import * as types from '../constants/ActionTypes';

const initialState = null;

export default function currentSong(state = initialState, action) {
    switch (action.type) {
    case types.SET_CURRENT_SONG:
        return action.value;
    default:
        return state;
    }
}
