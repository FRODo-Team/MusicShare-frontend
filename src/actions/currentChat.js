import * as types from '../constants/ActionTypes';

export const setCurrentChat = (chatId) => ({
    type: types.SET_CURRENT_CHAT,
    value: chatId,
});
