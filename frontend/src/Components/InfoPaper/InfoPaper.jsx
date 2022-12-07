import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';

export default function InfoPaper(object) {
  return (
    
      <Paper elevation={3} sx={{width:"100%",height:"100%"}}>
        <Grid container>
          <Grid item>
            <Typography variant='p'>First name: {object.person.firstName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='p'>Last name: {object.person.lastName}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='p'>Phone number: {object.person.phoneNumber}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='p'>Email: {object.person.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
  
  );
}