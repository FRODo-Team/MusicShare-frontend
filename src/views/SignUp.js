import { connect } from 'react-redux';

import SignUp from '../components/SignUp'
import { signUp } from '../actions'

const mapStateToProps = (state) => ({
    isLogin: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (username, password, nickname, email) => dispatch(signUp(username, password, nickname, email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
