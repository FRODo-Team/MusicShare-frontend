import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import chats from './chats';
import currentChat from './currentChat';

export default combineReducers({
    user,
    contacts,
    chats,
    currentChat,
});
