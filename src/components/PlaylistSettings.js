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

import ListOfClickable from './ListOfClickable';

export default function Chat(props) {
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
                    <Input placeholder="Artist"/>
                    <Input placeholder="Title"/>
                    <ListOfClickable sx={{ maxHeight: '40vh', minWidth: '70%' }}>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                    </ListOfClickable>
                    <Button variant="contained" color="primary">
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
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <Stack
                                direction="row"
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 2 }}
                            >
                                <IconButton aria-label="send message">
                                    <PlayArrowIcon />
                                </IconButton>
                                <Stack>
                                    <Typography variant="subtitle1">Artist</Typography>
                                    <Typography variant="subtitle2">Song</Typography>
                                </Stack>
                            </Stack>
                        </ListItem>
                    </ListOfClickable>
                    <Button variant="contained" color="primary">
                        Remove song
                    </Button>
                </Stack>
            </Stack>
            </Container>
        </Box>
    );
}
