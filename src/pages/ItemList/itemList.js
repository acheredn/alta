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
import Data from "./data.json";
import { useState } from "react";


// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const theme = createTheme();

export default function ItemList({items}) {
  const [query, setQuery] = useState("")
 

  return (
    <div id="items">
  
      <CssBaseline />
  
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

          <div> <input placeholder="Search..." onChange={event => setQuery(event.target.value)} />
            {
              Data.filter(post => {
                if (query === '') {
                  return post;
                } else if (post.itemName.toLowerCase().includes(query.toLowerCase())) {
                  return post;
                }
              }).map((post, index) => (
                <div className="box" key={index}>
                  <p>{post.itemName}</p>
                </div>
              ))
            } </div>

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

          {Data.map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    pt: '0%',
                  }}

                  image="http://placeimg.com/640/480/animals"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hello
                  </Typography>
                  <Typography>
                    This is brief item description
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={Link} to="/item" size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );
}