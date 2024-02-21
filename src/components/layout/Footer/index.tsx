import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f0f0f0',
                padding: '10px',
                marginTop: 'auto', // Push footer to the bottom of the screen
            }}
        >
            <Typography variant="body1" align="center">
                © {new Date().getFullYear()}  <Link target='_blank' href="https://durgesh94.github.io/MyPortfolio/">My Portfolio</Link>
            </Typography>
        </Box>
    );
};

export default Footer;