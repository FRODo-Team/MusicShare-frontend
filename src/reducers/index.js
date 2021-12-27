import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import chats from './chats';
import currentChat from './currentChat';
import playlists from './playlists';
import currentPlaylist from './currentPlaylist';
import songs from './songs';

export default combineReducers({
    user,
    contacts,
    chats,
    currentChat,
    playlists,
    currentPlaylist,
    songs,
});
