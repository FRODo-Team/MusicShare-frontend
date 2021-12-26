import React, { Component, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  useParams
} from "react-router-dom";

import MessageForm from './MessageForm';
import Messages from './Messages';

export default function Chat(props) {
    const params = useParams();
    console.log(params)

    useEffect(() => { props.setCurrentChat(parseInt(params.id)) })

    return (
        <Box {...props}>
            <Stack
                justifyContent="flex-end"
                sx={{ minWidth: '100%', height: '100%' }}
            >
                <Messages/>
                <MessageForm sx={{ minWidth: '100%' }}/>
            </Stack>
        </Box>
    );
}
