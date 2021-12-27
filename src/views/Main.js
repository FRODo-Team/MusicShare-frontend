import { connect } from 'react-redux';

import Main from '../components/Main'
import { 
    getChats,
    updateMessages,
    getPlaylists,
    getContacts,
    getSongs,
} from '../actions'

const mapStateToProps = (state) => {
    return ({
        isLogin: state.user.username,
    })
}

const mapDispatchToProps = (dispatch) => ({
    getChats: () => dispatch(getChats()),
    updateMessages: (since = null) => dispatch(updateMessages(since)),
    getPlaylists: () => dispatch(getPlaylists()),
    getContacts: (nickname = null) => dispatch(getContacts(nickname)),
    getSongs: (artist, title) => dispatch(getSongs(artist, title)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
