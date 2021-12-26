import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { NavLink, useHistory } from 'react-router-dom';

import Dialog from './Dialog';
import ListOfClickable from './ListOfClickable';
import { SIZES } from '../styles';

export default function Dialogs(props) {
    let history = useHistory();

    const chatsToDialogs = (chats) => {
        let dialogs = []
        chats.forEach((chat_, chatId) => {
            const chat = chat_.toJSON();
            let last_message = null;
            if (chat.messages.size > 0) {
                last_message = chat.messages.last().content;
                console.log(last_message)
            }
            dialogs.push(
                <Dialog
                    key={chatId}
                    nickname={chat.nicknames.join(', ')}
                    last_message={last_message}
                    isCurrent={() => props.currentChat === chatId}
                    cb={() => { history.push(`/chats/${chatId}`); }}
                />
            )
        })
        return dialogs;
    }

    return (
        <Box
            sx={{
                height: '100%'
            }}
        >
            <ListOfClickable sx={{ maxHeight: `calc(${SIZES.content.height} - ${SIZES.tablist.height})`, minHeight: '100%' }}>
                {chatsToDialogs(props.chats)}
            </ListOfClickable>

            <NavLink to={ (location) => {
                props.getContacts();
                return "/new";
            } }>
            <Fab
                sx={{
                    float: 'left',
                    position: 'relative',
                    bottom: 65,
                    left: 335,
                }}
                color="primary"
            >
                <AddIcon/>
            </Fab>
            </NavLink>
        </Box>
    );
}
