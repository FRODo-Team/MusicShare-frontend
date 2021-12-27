import { connect } from 'react-redux';

import Dialogs from '../components/Dialogs'
import {
    setCurrentChat,
} from '../actions'

const mapStateToProps = (state) => ({
    chats: state.chats,
    currentChat: state.currentChat,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentChat: (chatId) => dispatch(setCurrentChat(chatId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
