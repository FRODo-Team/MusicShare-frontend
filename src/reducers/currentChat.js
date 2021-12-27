import * as types from '../constants/ActionTypes';

const initialState = null;

export default function currentChat(state = initialState, action) {
    switch (action.type) {
    case types.SET_CURRENT_CHAT:
        return action.value;
    default:
        return state;
    }
}
