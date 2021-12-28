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

export default function CreateChat(props) {
    const handleNicknameChange = (event) => {
        props.getContacts(event.target.value);
    }

    const [selected, setSelected] = useState(-1);

    const {contacts, ...restProps} = props;

    let idx = 0;
    const items = contacts.map((contact) => (
        <Box
            key={idx++}
            isCurrent={() => contact.id == selected }
            cb={() => setSelected(contact.id)}
        >
        <ListItemText
            primary={contact.nickname}
        />
        </Box>
    ))

    return (
        <Box {...restProps}>
            <Container sx={{ height: '100%' }}>
            <Stack
                sx={{ minWidth: '100%', height: '100%' }}
                justifyContent="center"
                spacing={2}
                alignItems="center"
            >
                <Input placeholder="Nickname" onChange={handleNicknameChange} />
                <ListOfClickable sx={{ maxHeight: '40vh', minWidth: '50%' }}>
                    { items }
                </ListOfClickable>
                <Button variant="contained" color="primary" onClick={event => { props.createChat(selected); }} >
                    Start conversation
                </Button>
            </Stack>
            </Container>
        </Box>
    );
}
