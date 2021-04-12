import {Grid, Typography } from '@material-ui/core';
import React from 'react';

const TodoItem = () => { 
    return(
       
    <Grid Container>
        <Typography variant="h6">
            title
        </Typography>
        <Typography variant="body1">
            Type
        </Typography>
        <Button variant="contained">
            Details
        </Button>
        <Button variant="outlined" color="secondary">
            Remove
        </Button>
    </Grid>
)}