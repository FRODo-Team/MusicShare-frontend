import { connect } from 'react-redux';

import CreateChat from '../components/CreateChat'
import { getContacts } from '../actions'

const mapStateToProps = (state) => ({
    contacts: state.contacts,
})

const mapDispatchToProps = (dispatch) => ({
    getContacts: (nickname = null) => dispatch(getContacts(nickname)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChat)
