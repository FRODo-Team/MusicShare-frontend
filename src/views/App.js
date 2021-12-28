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

    console.log('Raw since:', since_raw)
    let since = moment(new Date(since_raw)).format('YYYY-MM-DD HH:mm:ss')
    console.log(since)

    if (state.chats.size > 0 && since_raw == null) {
        since = null
    }

    return ({
        isLogin: state.user.username,
        since: since,
        canLoad: state.chats.size > 0,
    })
}

const mapDispatchToProps = (dispatch) => ({
    loadUserFromMemory: () => dispatch(loadUserFromMemory()),
    updateMessages: (since = null) => dispatch(updateMessages(since)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
