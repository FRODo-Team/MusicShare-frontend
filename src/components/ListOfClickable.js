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

function getListItems(items, index, handler) {
    const listItems = []

    for (let idx = 0; idx < items.length; idx += 1) {
        listItems.push(
            <ListItemButton
                key={2 * idx}
                alignItems="flex-start"
                selected={index === idx}
                onClick={(event) => handler(event, idx)}
            >
                { items[idx] }
            </ListItemButton>
        )
        listItems.push(
            <Divider key={2*idx + 1} component="li" />
        )
    }

    return listItems
    //return items.flatMap((item) => [
            //<ListItemButton
                //alignItems="flex-start"
                //selected={selectedIndex === 0}
                //onClick={(event) => handleItemClick(event, 0)}
            //>
                //{ item }
            //</ListItemButton>
            //,
            //<Divider component="li" />
        //]
    //)
}

export default function ListOfClickable(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleItemClick = (event, index) => {
        setSelectedIndex(index);
        if (props.cb) {
            props.cb(index);
        }
    };

    return (
        <Box {...props} style={{ overflow: 'auto' }}>
        <List style={{ maxHeight: '100%' }}>
            <Divider component="li" />
            { getListItems(React.Children.toArray(props.children), selectedIndex, handleItemClick) }
        </List>
        </Box>
    );
}
