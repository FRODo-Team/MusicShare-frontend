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
import { NavLink } from 'react-router-dom';

import Dialog from './Dialog';
import ListOfClickable from './ListOfClickable';
import { SIZES } from '../styles';

export default function Dialogs(props) {
    return (
        <Box
            sx={{
                height: '100%'
            }}
        >
            <ListOfClickable sx={{ maxHeight: `calc(${SIZES.content.height} - ${SIZES.tablist.height})`, minHeight: '100%' }}>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
                <Dialog/>
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
