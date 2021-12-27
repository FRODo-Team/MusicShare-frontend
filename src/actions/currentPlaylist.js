import * as types from '../constants/ActionTypes';

export const setCurrentPlaylist = (playlistId) => ({
    type: types.SET_CURRENT_PLAYLIST,
    value: playlistId,
});
