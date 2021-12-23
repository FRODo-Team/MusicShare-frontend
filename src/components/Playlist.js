import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Playlist(props) {
    return (
        <ListItemText
            primary="Title"
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        8 songs
                    </Typography>
                </React.Fragment>
            }
        />
    )
}
