import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Playlist(props) {
    return (
        <ListItemText
            primary={props.title}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        {props.songsCount} songs
                    </Typography>
                </React.Fragment>
            }
        />
    )
}
