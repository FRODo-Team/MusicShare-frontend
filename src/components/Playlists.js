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
import { NavLink, useHistory } from 'react-router-dom';
import { List as ImList } from 'immutable';

import Playlist from './Playlist';
import ListOfClickable from './ListOfClickable';
import { SIZES } from '../styles';

export default function Playlists(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let history = useHistory()

    const items = ImList(props.playlists.values()).map((p) => (
        <Playlist
            key={p.get('id')}
            title={p.get('title')}
            songsCount={p.get('songsCount')}
            isCurrent={() => p.get('id') == props.currentPlaylist}
            cb={() => {history.push(`/playlists/${p.get('id')}`)}}
        />
    )).toArray()
    console.log(items)

    const [newPlaylistName, setNewPlaylistName] = React.useState('');

    return (
        <Box
            sx={{
                height: '100%'
            }}
        >
            <ListOfClickable sx={{ maxHeight: `calc(${SIZES.content.height} - ${SIZES.tablist.height})`, minHeight: '100%' }}>
                {items}
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
                        value={newPlaylistName}
                        onChange={(event) => setNewPlaylistName(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { props.createPlaylist(newPlaylistName); handleClose(); }}>Create</Button>
                </DialogActions>
            </MUIDialog>
        </Box>
    );
}
