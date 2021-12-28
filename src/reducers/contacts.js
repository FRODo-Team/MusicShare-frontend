import * as types from '../constants/ActionTypes';

const initialState = [];

export default function contacts(state = initialState, action) {
    switch (action.type) {
    case types.GET_CONTACTS:
        return action.value;
    default:
        return state;
    }
}
