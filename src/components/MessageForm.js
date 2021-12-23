import React, { Component } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SendIcon from '@mui/icons-material/Send';

export default function MessageForm(props) {
    return (
        <Box
            {...props}
        >
        <Divider/>
        <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={0}
            alignItems="flex-end"
            sx={{ pt: 2, pb: 2 }}
        >
            <IconButton aria-label="attach playlist">
                <QueueMusicIcon />
            </IconButton>

            <TextField
                InputProps={{
                    style: {
                        padding: 10
                    }
                }}
                multiline maxRows={1}
                sx={{ minWidth: '75%' }}
            >
            </TextField>

            <IconButton aria-label="send message">
                <SendIcon />
            </IconButton>
        </Stack>
        </Box>
    );
}
