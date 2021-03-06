import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

import Dialogs from '../views/Dialogs'
import Playlists from '../views/Playlists'
import { SIZES } from '../styles';

export default function Tabbar(props) {
    const [toDisplay, setToDisplay] = React.useState('dialogs');

    const handleChange = (event, newToDisplay) => {
        setToDisplay(newToDisplay);
    }

    return (
        <Box {...props} >
            <TabContext value={toDisplay}>
                <TabList onChange={handleChange} variant="fullWidth" sx={{
                    minHeight: SIZES.tablist.height,
                    maxHeight: SIZES.tablist.height,
                }}>
                    <Tab label="Dialogs" value="dialogs" />
                    <Tab label="Playlists" value="playlists" />
                </TabList>

                <TabPanel value="dialogs" sx={{ p: 0, height: SIZES.list.height }}>
                    <Dialogs/>
                </TabPanel>
                <TabPanel value="playlists" sx={{ p: 0, height: SIZES.list.height }}>
                    <Playlists/>
                </TabPanel>
            </TabContext>
        </Box>
    )
}
