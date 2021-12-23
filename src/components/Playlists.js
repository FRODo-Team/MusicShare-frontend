import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MUIDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Playlist from './Playlist';
import ListOfClickable from './ListOfClickable';
import { SIZES } from '../styles';

export default function Playlists() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                height: '100%'
            }}
        >
            <ListOfClickable sx={{ maxHeight: `calc(${SIZES.content.height} - ${SIZES.tablist.height})`, minHeight: '100%' }}>
                <Playlist/>
                <Playlist/>
                <Playlist/>
            </ListOfClickable>

            <Fab
                sx={{
                    float: 'left',
                    position: 'relative',
                    bottom: 65,
                    left: 335,
                }}
                color="primary"
                onClick={handleClickOpen}
            >
                <AddIcon/>
            </Fab>

            <MUIDialog open={open} onClose={handleClose}>
                <DialogTitle>Create new playlist</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create new playlist, enter title
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Create</Button>
                </DialogActions>
            </MUIDialog>
        </Box>
    );
}
