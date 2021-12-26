import { connect } from 'react-redux';

import Dialogs from '../components/Dialogs'
import {
    getContacts,
    setCurrentChat,
} from '../actions'

const mapStateToProps = (state) => ({
    chats: state.chats,
    currentChat: state.currentChat,
})

const mapDispatchToProps = (dispatch) => ({
    getContacts: (nickname = null) => dispatch(getContacts(nickname)),
    setCurrentChat: (chatId) => dispatch(setCurrentChat(chatId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
