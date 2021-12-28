import * as types from '../constants/ActionTypes';

export const setCurrentSong = (song) => ({
    type: types.SET_CURRENT_SONG,
    value: song,
});
