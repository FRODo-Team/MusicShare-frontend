import React, { Component, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Main from './Main';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Topbar from '../views/Topbar';
import Tabbar from './Tabbar';
import Chat from './Chat';
import CreateChat from './CreateChat';
import PlaylistSettings from './PlaylistSettings';
import { SIZES } from '../styles';

export default function App(props) {
    useEffect(() => {
        props.loadUserFromMemory();
    })

    return (
        <Box sx={{  minHeight: '100vh', bgcolor: '#E7EBF0' }}>
            <React.StrictMode>
            <Topbar/>
            <Router>
            <Container sx={{ mt: 2, p: '0 !important' }} component={Paper}>
                <Switch>
                    <Route path='/login'>
                        <SignIn sx={{}}/>
                    </Route>
                    <Route path='/join'>
                        <SignUp sx={{}}/>
                    </Route>
                    <Route path='/'>
                        <Main/>
                    </Route>
                </Switch>
            </Container>
            </Router>
            </React.StrictMode>
        </Box>
    )
}
