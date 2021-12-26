import { connect } from 'react-redux';

import Messages from '../components/Messages'
import {
    setCurrentChat,
} from '../actions'

const mapStateToProps = (state) => ({
    user: state.user,
    chats: state.chats,
    currentChat: state.currentChat,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentChat: (chatId) => dispatch(setCurrentChat(chatId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
