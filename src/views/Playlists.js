import { connect } from 'react-redux';

import {
    createPlaylist
} from '../actions'

import Playlists from '../components/Playlists'
const mapStateToProps = (state) => ({
    playlists: state.playlists,
    currentPlaylist: state.currentPlaylist,
})

const mapDispatchToProps = (dispatch) => ({
    createPlaylist: (name) => dispatch(createPlaylist(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)
