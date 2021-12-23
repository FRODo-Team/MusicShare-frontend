import React, { Component } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Topbar from './Topbar';
import Tabbar from './Tabbar';
import Chat from './Chat';
import CreateChat from './CreateChat';
import PlaylistSettings from './PlaylistSettings';
import { SIZES } from '../styles';

class App extends Component {
    render() {
        return (
            <Box sx={{  minHeight: '100vh', bgcolor: '#E7EBF0' }}>
                <React.StrictMode>
                <Topbar/>
                <Container sx={{ mt: 2, p: '0 !important' }} component={Paper}>
                    <SignUp sx={{}}/>
                </Container>
                </React.StrictMode>
            </Box>
        )
    }
}

export default App;
