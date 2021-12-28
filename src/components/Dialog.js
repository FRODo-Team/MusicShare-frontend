import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Dialog(props) {
    let last_message = ''
    if (props.last_message) {
        last_message = props.last_message
    }
    return (
        <ListItemText
            primary={props.nickname}
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        {last_message}
                    </Typography>
                </React.Fragment>
            }
        />
    )
}
