import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';

export const NotFound = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <Typography variant="h1">404</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5">Page Not Found</Typography>
            </Grid>
            <Grid item>
                <Button component={Link} to="/" variant="contained" color="primary">
                    Go to Home
                </Button>
            </Grid>
        </Grid>
    );
};