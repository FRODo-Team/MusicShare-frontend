import { connect } from 'react-redux';

import MessageForm from '../components/MessageForm'
import { 
    sendMessage,
} from '../actions'

const mapStateToProps = (state) => ({
    currentChat: state.currentChat,
    playlists: state.playlists,
})

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (chatId, message, playlistId) => dispatch(sendMessage(chatId, message, playlistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
