import { connect } from 'react-redux';

import Player from '../components/Player'

const mapStateToProps = (state) => ({
    currentSong: state.currentSong,
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Player)
