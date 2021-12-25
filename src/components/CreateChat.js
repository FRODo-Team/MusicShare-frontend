import React, { Component, useState } from "react";
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

function toListItems(contacts) {
    var idx = 0;
    return contacts.map((contact) => (
        <ListItemText primary={contact.nickname} key={idx++}/>
    ))
}

export default function CreateChat(props) {
    const handleNicknameChange = (event) => {
        props.getContacts(event.target.value);
    }

    const [selected, setSelected] = useState(-1);

    return (
        <Box {...props}>
            <Container sx={{ height: '100%' }}>
            <Stack
                sx={{ minWidth: '100%', height: '100%' }}
                justifyContent="center"
                spacing={2}
                alignItems="center"
            >
                <Input placeholder="Nickname" onChange={handleNicknameChange} />
                <ListOfClickable sx={{ maxHeight: '40vh', minWidth: '50%' }} cb={idx => { setSelected(idx); }}>
                    { toListItems(props.contacts) }
                </ListOfClickable>
                <Button variant="contained" color="primary" onClick={event => { console.log(props.contacts[selected]) }} >
                    Start conversation
                </Button>
            </Stack>
            </Container>
        </Box>
    );
}
