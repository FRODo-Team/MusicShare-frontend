import { connect } from 'react-redux';

import App from '../components/App'
import { loadUserFromMemory } from '../actions'

const mapStateToProps = (state) => ({
    isLogin: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
    loadUserFromMemory: () => dispatch(loadUserFromMemory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

