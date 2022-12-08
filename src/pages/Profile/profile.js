// template from https://github.com/mui/material-ui/tree/v5.10.7/docs/data/material/getting-started/templates/sign-up

import React, { useEffect, useState, useContext } from 'react';
// import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from '../../context';


// import theme from '../../App';
// import { ThemeProvider } from 'styled-components';



export default function Profile() {
  // const { user } = useContext(AuthContext);
  const [user, loading] = useAuthState(auth);

  /* function to get all Items from firestore in realtime */
  useEffect(() => {

      console.log("user data successfully loaded")

  }, [user]);

  return (
    <body>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ width: 90, height: 90 }}
            alt="User Profile Image" src={user.photoURL} />
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h3>Name: {user.displayName}</h3>
              </Grid>
              <Grid item xs={12}>
                <h3>Email: {user.email}</h3>
              </Grid>
            </Grid>
            <Button
              component={Link}
              href='/my-items'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              My Items
            </Button>
          </Box>
        </Box>
      </Container>
    </body>
  );
}