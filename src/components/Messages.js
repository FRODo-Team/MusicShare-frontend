import React, { Component, useEffect } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { SIZES } from '../styles';

export default function Messages(props) {
    useEffect(() => {
        var messages = document.getElementById('messages');
        messages.scrollTop = messages.scrollHeight;
    })

    let items = []
    const chat = props.chats.get(props.currentChat)
    console.log(chat)
    if (chat) {
        let idx = 0;
        const messages = chat.get('messages').toArray()
        console.log(messages)

        for (const message of messages) {
            const isOwner = props.user.id == message.senderId
            let bgcolor = 'primary.main'
            let pos = 'flex-start'

            if (isOwner) {
                bgcolor = 'secondary.main'
                pos = 'flex-end'
            }

            items.push(
                <ListItem
                    key={idx++}
                    alignItems="flex-start"
                    sx={{ width: '100%' }}
                >
                    <Stack
                        justifyContent={pos}
                        direction="row"
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                        }}
                    >
                    <Paper
                        sx={{
                            p: 1,
                            maxWidth: '40%',
                            width: 'fit-content',
                            height: 'fit-content',
                            color: 'primary',
                            overflowWrap: 'break-word',
                            color: 'white',
                            bgcolor: bgcolor,
                            borderRadius: '7px',
                        }}
                    >
                        <Typography>
                            {message.content}
                        </Typography>
                    </Paper>
                    </Stack>
                </ListItem>
            )

            if (message.playlist) {
                const playlist = message.playlist
                const songs = playlist.songsDto

                let songsItems = []

                for (const song of songs) {
                    songsItems.push(
                        <ListItem key={idx++}>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="play" onClick={() => { props.setCurrentSong(song); console.log('hiiii') }}>
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">{song.author}</Typography>
                                    <Typography variant="subtitle2">{song.name}</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                    )
                }

                items.push(
                    <ListItem
                        key={idx++}
                        alignItems="flex-start"
                        sx={{ width: '100%' }}
                    >
                        <Stack
                            justifyContent={pos}
                            direction="row"
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                            }}
                        >
                        <Paper
                            sx={{
                                p: 1,
                                maxWidth: '40%',
                                width: 'fit-content',
                                height: 'fit-content',
                                color: 'primary',
                                overflowWrap: 'break-word',
                                borderRadius: '7px',
                            }}
                        >
                            <Typography variant="h6">
                                {playlist.title}
                            </Typography>
                            <List>
                                {songsItems}
                            </List>
                        </Paper>
                        </Stack>
                    </ListItem>
                )
            }
        }
    }

    return (
        <Box
            id="messages"
            sx={{
                ml: 2,
                mr: 2,
                mt: 1,
                mb: 0,
            }}
            style={{
                maxHeight: SIZES.messages.height,
                overflow: 'auto'
            }}
        >
        <List
        >
            {items}
        </List>
        </Box>
    )
}
