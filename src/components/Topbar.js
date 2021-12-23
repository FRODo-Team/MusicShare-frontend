import * as React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { SIZES } from '../styles';

export default function Topbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ minHeight: SIZES.topbar }} >
                <Container>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Music Share
                        </Typography>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 2 }}
                        >
                            <Button color="inherit">Sign in</Button>
                            <Typography variant="h6" component="div">
                                or
                            </Typography>
                            <Button variant="outlined" color="inherit">Sign up</Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
