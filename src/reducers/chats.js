import * as types from '../constants/ActionTypes';

import { fromJS, Map as ImMap } from 'immutable';

const initialState = ImMap({});

export default function chats(state = initialState, action) {
    switch (action.type) {
    case types.GET_CHATS:
        var chats = new Map();
        for (const chat of action.value) {
            chats.set(chat.chatId, {...chat, messages: []})
        }
        return fromJS(chats);
    case types.UPDATE_MESSAGES:
        for (const message of action.value) {
            const chat = state.get(message.chatId);
            if (chat) {
                const messages = chat.get('messages')
                chat = chat.set('messages', messages.push(message))
                state = state.set(message.chatId, chat)
            }
        }
        return state;
    default:
        return state;
    }
}

