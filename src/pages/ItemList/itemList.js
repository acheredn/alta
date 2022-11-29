import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

export default function ItemList({items}) {
  const [query, setQuery] = useState("")
  const [show, setShow] = useState(false);
  return (
    <div id = "items">
   {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
         {/* <main> */}
           {/* Hero unit */}
          <Box
            sx={{
              pt: 8,
              pb: 2,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Items List
              </Typography>

            

              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Search for item</Button>
                <Button variant="outlined">Add an item</Button>
              </Stack>
            </Container>
          </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}


        <Grid container spacing={6}>
        </Grid>
      </Container>
    </div>

  );
}