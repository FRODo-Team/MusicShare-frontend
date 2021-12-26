import { connect } from 'react-redux';

import Main from '../components/Main'
import { 
    getChats,
    updateMessages,
} from '../actions'

const mapStateToProps = (state) => ({
    isLogin: state.user.username
})

const mapDispatchToProps = (dispatch) => ({
    getChats: () => dispatch(getChats()),
    updateMessages: () => dispatch(updateMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
