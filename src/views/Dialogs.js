import { connect } from 'react-redux';

import Dialogs from '../components/Dialogs'
import { getContacts } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    getContacts: (nickname = null) => dispatch(getContacts(nickname)),
})

export default connect(null, mapDispatchToProps)(Dialogs)
