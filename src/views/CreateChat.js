import { connect } from 'react-redux';

import CreateChat from '../components/CreateChat'
import { getContacts, createChat } from '../actions'

const mapStateToProps = (state) => ({
    contacts: state.contacts,
})

const mapDispatchToProps = (dispatch) => ({
    getContacts: (nickname = null) => dispatch(getContacts(nickname)),
    createChat: (targetId) => dispatch(createChat(targetId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChat)
