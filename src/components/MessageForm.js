import React, { Component, useState } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import MUIDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import ListOfClickable from './ListOfClickable';
import { SIZES } from '../styles';

export default function MessageForm(props) {
    const [message, setMessage] = useState('');
    const [playlist, setPlaylist] = useState(null);

    const {playlists, sendMessage, currentChat, ...restProps} = props;

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    let items = []
    let idx = 0
    playlists.forEach((playlist_, playlistId) => {
        items.push(
            <Box
                key={idx++}
                isCurrent={() => selected && playlist_.get('id') == selected}
                cb={() => { setSelected(playlist_.get('id')); }}
            >
                <Typography>
                    {playlist_.get('title')}
                </Typography>
            </Box>
        )
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            {...restProps}
        >
        <Divider/>
        <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={0}
            alignItems="flex-end"
            sx={{ pt: 2, pb: 2 }}
        >
            <IconButton
                onClick={handleClickOpen}
                aria-label="attach playlist"
            >
                <QueueMusicIcon />
            </IconButton>

            <TextField
                InputProps={{
                    style: {
                        padding: 10
                    }
                }}
                value={message}
                onChange={handleChange}
                multiline maxRows={1}
                sx={{ minWidth: '75%' }}
            >
            </TextField>

            <IconButton
                onClick={() => {
                    sendMessage(currentChat, message, playlist);
                    setMessage('');
                    setPlaylist(null);
                }}
                aria-label="send message"
            >
                <SendIcon />
            </IconButton>
        </Stack>

            <MUIDialog open={open} onClose={handleClose}>
                <DialogTitle>Attach playlist to message</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To attach playlist, choose it from list below
                    </DialogContentText>
                    <ListOfClickable sx={{ maxHeight: `calc(${SIZES.content.height} / 2)`, minHeight: '100%' }}>
                        {items}
                    </ListOfClickable>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => {
                        setPlaylist(selected);
                        setSelected(null);
                        handleClose();
                    }}>Attach</Button>
                </DialogActions>
            </MUIDialog>
        </Box>
    );
}
