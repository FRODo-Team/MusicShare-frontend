import React, { Component, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Switch, Route, Redirect } from 'react-router-dom';

import Tabbar from './Tabbar';
import Chat from '../views/Chat';
import CreateChat from '../views/CreateChat';
import PlaylistSettings from '../views/PlaylistSettings';
import { SIZES } from '../styles';

export default function Main(props) {
    if (!props.isLogin) {
        return <Redirect to="/login" />
    }

    useEffect(() => {
        props.getChats();
        props.getPlaylists();
        props.getContacts();
        props.getSongs();
    })

    return (
        <Grid container columnSpacing={0} sx={{
            height: SIZES.content.height,
            minHeight: SIZES.content.height,
            maxHeight: SIZES.content.height
        }}>
            <Grid item xs={4} sx={{ maxHeight: '100%', height: '100%' }}>
                <Tabbar sx={{ minHeight: '100%', maxHeight: '100%', height: '100%' }} />
            </Grid>
            <Grid item xs={8} >
                <Box sx={{ display: 'flex', minHeight: '100%', minWidth: '100%' }} >
                    <Divider orientation="vertical" flexItem/>
                    <Switch>
                        <Route exact path="/">
                            <div/>
                        </Route>
                        <Route path='/new'>
                            <CreateChat sx={{
                                bgcolor: 'white',
                                //display: 'flex',
                                minWidth: '100%',
                                verticalAlign: 'bottom',
                                display: 'table-cell',
                            }} >
                            </CreateChat>
                        </Route>
                        <Route path='/chats/:id'>
                            <Chat sx={{
                                bgcolor: 'white',
                                //display: 'flex',
                                minWidth: '100%',
                                verticalAlign: 'bottom',
                            }} >
                            </Chat>
                        </Route>
                        <Route path='/playlists/:id'>
                            <PlaylistSettings sx={{
                                bgcolor: 'white',
                                //display: 'flex',
                                minWidth: '100%',
                                verticalAlign: 'bottom',
                                display: 'table-cell',
                            }} >
                            </PlaylistSettings>
                        </Route>
                    </Switch>
                </Box>
            </Grid>
        </Grid>
    )
}
