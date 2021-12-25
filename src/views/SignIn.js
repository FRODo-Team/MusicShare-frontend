import { connect } from 'react-redux';

import SignIn from '../components/SignIn'
import { signIn } from '../actions'

const mapStateToProps = (state) => ({
    isLogin: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
    signIn: (username, password) => dispatch(signIn(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
