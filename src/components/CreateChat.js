import React, { Component } from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Input from '@mui/material/Input';

import ListOfClickable from './ListOfClickable';

export default function Chat(props) {
    return (
        <Box {...props}>
            <Container sx={{ height: '100%' }}>
            <Stack
                sx={{ minWidth: '100%', height: '100%' }}
                justifyContent="center"
                spacing={2}
                alignItems="center"
            >
                <Input placeholder="Nickname"/>
                <ListOfClickable sx={{ maxHeight: '40vh', minWidth: '50%' }}>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                    <ListItemText primary="Duuude"/>
                </ListOfClickable>
                <Button variant="contained" color="primary">
                    Start conversation
                </Button>
            </Stack>
            </Container>
        </Box>
    );
}
