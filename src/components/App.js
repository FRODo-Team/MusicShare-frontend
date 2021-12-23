import React, { Component } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Topbar from './Topbar';
import Tabbar from './Tabbar';
import Chat from './Chat';
import { SIZES } from '../styles';

class App extends Component {
    render() {
        return (
            <Box sx={{  minHeight: '100vh', bgcolor: '#E7EBF0' }}>
                <React.StrictMode>
                <Topbar/>
                <Container sx={{ mt: 2, p: '0 !important' }} component={Paper}>
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
                                <Chat sx={{
                                    bgcolor: 'white',
                                    //display: 'flex',
                                    minWidth: '100%',
                                    verticalAlign: 'bottom',
                                    display: 'table-cell',
                                }} >
                                </Chat>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                </React.StrictMode>
            </Box>
        )
    }
}

export default App;
