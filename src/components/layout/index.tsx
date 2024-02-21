import React, { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer';
import { AppDrawer } from './Drawer';
import { Header } from './Header';

const drawerWidth = 180;
interface LayoutProps {
    children: ReactNode; // ReactNode type allows any React node to be passed as children
}

export const Layout = ({ children }: LayoutProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Header
                    drawerWidth={drawerWidth}
                    handleDrawerToggle={handleDrawerToggle}
                />
                <AppDrawer
                    mobileOpen={mobileOpen}
                    drawerWidth={drawerWidth}
                    setIsClosing={setIsClosing}
                    setMobileOpen={setMobileOpen}
                />
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        minHeight: 'calc(100vh)', // Subtracting the height of the app bar
                    }}
                >
                    <Toolbar />
                    <Box sx={{ flexGrow: 1, p: 3 }}>
                        {children}
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </Router >
    );
}
