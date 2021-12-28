import React, { Component } from "react";
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
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useParams } from 'react-router-dom';

import ListOfClickable from './ListOfClickable';

export default function Chat(props) {
    const params = useParams()
    const playlistId = parseInt(params['id'])
    React.useEffect(() => {
        props.setCurrentPlaylist(playlistId)
    })

    const [selected, setSelected] = React.useState(null);

    const songs = props.playlists.get(playlistId).get('songsDto');

    const items = songs.map((song) => (
        <Box
            key={song.get('id')}
            isCurrent={() => song.get('id') == selected}
            cb={() => { setSelected(song.get('id')); }}
        >
            <Stack
                direction="row"
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
            >
                <IconButton aria-label="send message" onClick={() => { props.setCurrentSong(song.toJS()); }}>
                    <PlayArrowIcon />
                </IconButton>
                <Stack>
                    <Typography variant="subtitle1">{song.get('author')}</Typography>
                    <Typography variant="subtitle2">{song.get('name')}</Typography>
                </Stack>
            </Stack>
        </Box>
    ))

    const [toAdd, setToAdd] = React.useState(null);
    const [artist, setArtist] = React.useState('');
    const [title, setTitle] = React.useState('');

    const songs_items = props.songs.map((song) => (
        <Box
            key={song.id}
            isCurrent={() => song.id == toAdd}
            cb={() => { setToAdd(song.id); }}
        >
            <Stack
                direction="row"
                sx={{
                    width: '100%',
                    maxWidth: '100%',
                }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
            >
                <IconButton aria-label="send message" onClick={() => { props.setCurrentSong(song); }}>
                    <PlayArrowIcon />
                </IconButton>
                <Stack>
                    <Typography variant="subtitle1">{song.author}</Typography>
                    <Typography variant="subtitle2">{song.name}</Typography>
                </Stack>
            </Stack>
        </Box>
    ))

    return (
        <Box {...props}>
            <Container sx={{ height: '100%' }}>
            <Stack
                sx={{ minWidth: '100%', height: '100%' }}
                direction="row"
                justifyContent="space-evenly"
                spacing={0}
                alignItems="flex-end"
            >
                <Stack
                    sx={{ width: '50%', height: '100%' }}
                    justifyContent="center"
                    spacing={2}
                    alignItems="center"
                >
                    <Input 
                        placeholder="Artist"
                        onChange={(event) => {
                            props.getSongs(event.target.value, title);
                            setArtist(event.target.value);
                        } }/>
                    <Input 
                        placeholder="Title" 
                        onChange={(event) => {
                            props.getSongs(artist, event.target.value);
                            setTitle(event.target.value);
                        } }/>
                    <ListOfClickable sx={{ maxHeight: '40vh', minWidth: '70%' }}>
                        {songs_items}
                    </ListOfClickable>
                    <Button variant="contained" color="primary" onClick={() => props.addSong(playlistId, toAdd)}>
                        Add song
                    </Button>
                </Stack>
                <Stack
                    sx={{ width: '50%', height: '100%' }}
                    justifyContent="center"
                    spacing={2}
                    alignItems="center"
                >
                    <ListOfClickable sx={{ maxHeight: '40vh', minWidth: '70%' }}>
                        {items}
                    </ListOfClickable>
                    <Button variant="contained" color="primary" onClick={() => props.removeSong(playlistId, selected)}>
                        Remove song
                    </Button>
                </Stack>
            </Stack>
            </Container>
        </Box>
    );
}
