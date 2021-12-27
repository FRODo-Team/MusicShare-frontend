import { connect } from 'react-redux';
import {
    getSongs,
    removeSong,
    addSong,
    setCurrentPlaylist,
} from '../actions';

import PlaylistSettings from '../components/PlaylistSettings'
const mapStateToProps = (state) => ({
    songs: state.songs,
    playlists: state.playlists,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentPlaylist: (playlistId) => dispatch(setCurrentPlaylist(playlistId)),
    getSongs: (artist, title) => dispatch(getSongs(artist, title)),
    addSong: (playlistId, ...songIds) => dispatch(addSong(playlistId, ...songIds)),
    removeSong: (playlistId, songId) => dispatch(removeSong(playlistId, songId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSettings)
