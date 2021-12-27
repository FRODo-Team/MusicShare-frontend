import { connect } from 'react-redux';

import Chat from '../components/Chat'
import {
    setCurrentChat,
} from '../actions'

const mapStateToProps = null

const mapDispatchToProps = (dispatch) => ({
    setCurrentChat: (chatId) => dispatch(setCurrentChat(chatId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
