import React, { Component } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Topbar from './Topbar';
import Tabbar from './Tabbar';
import Chat from './Chat';
import CreateChat from './CreateChat';
import PlaylistSettings from './PlaylistSettings';
import { SIZES } from '../styles';

export default function Main(props) {
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
                    <PlaylistSettings sx={{
                        bgcolor: 'white',
                        //display: 'flex',
                        minWidth: '100%',
                        verticalAlign: 'bottom',
                        display: 'table-cell',
                    }} >
                    </PlaylistSettings>
                </Box>
            </Grid>
        </Grid>
    )
}
