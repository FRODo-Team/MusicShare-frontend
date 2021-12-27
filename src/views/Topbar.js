import { connect } from 'react-redux';

import Topbar from '../components/Topbar'
import { signOut } from '../actions'

const mapStateToProps = (state) => ({
    isLogin: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
