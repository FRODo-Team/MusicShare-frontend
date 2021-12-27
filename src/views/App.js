import { connect } from 'react-redux';
import { List as ImList } from 'immutable';
import moment from 'moment';

import App from '../components/App'
import { loadUserFromMemory, updateMessages } from '../actions'

const mapStateToProps = (state) => {
    const chats = ImList(state.chats.values());
    const since_raw = chats
                    .flatMap((c) => c.get('messages'))
                    .map((m) => Date.parse(m.datetime))
                    .max()

    const since = moment(new Date(since_raw)).format('YYYY-MM-DD hh:mm:ss')
    console.log(since)

    return ({
        isLogin: state.user.username,
        since: since
    })
}

const mapDispatchToProps = (dispatch) => ({
    loadUserFromMemory: () => dispatch(loadUserFromMemory()),
    updateMessages: (since = null) => dispatch(updateMessages(since)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

