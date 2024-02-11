// DrawerComponent.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

export const LeftDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen: boolean) => () => {
        setOpen(isOpen);
    };

    return (
        <>
            <button onClick={toggleDrawer(true)}>Open Drawer</button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Item 1" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Item 2" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Item 3" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};