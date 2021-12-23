import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { SIZES } from '../styles';

function renderRow(props) {
    const {index, style} = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

export default function Dialogs() {
    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box style={{ maxHeight: `calc(${SIZES.content.height} - ${SIZES.tablist.height})`, minHeight: '100%', overflow: 'auto' }}>
        <List style={{ maxHeight: '100%', overflow: 'auto' }}>
            <Divider component="li" />
            <ListItemButton
                alignItems="flex-start"
                selected={selectedIndex === 0}
                onClick={(event) => handleItemClick(event, 0)}
            >
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
            </ListItemButton>
            <Divider component="li" />
            <ListItemButton
                alignItems="flex-start"
                selected={selectedIndex === 1}
                onClick={(event) => handleItemClick(event, 1)}
            >
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
            </ListItemButton>
            <Divider component="li" />
        </List>
        </Box>
    );
}
