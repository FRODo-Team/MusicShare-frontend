import * as types from '../constants/ActionTypes';

const initialState = [];

export default function songs(state = initialState, action) {
    switch (action.type) {
    case types.GET_SONGS:
        return action.value;
    default:
        return state;
    }
}
