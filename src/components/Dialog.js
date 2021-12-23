import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export default function Dialog(props) {
    return (
        <ListItemText
            primary="Duuude"
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        How do you do?
                    </Typography>
                </React.Fragment>
            }
        />
    )
}
