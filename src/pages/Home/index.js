import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../../pages/Test/searchbar';
import Quote from '../../pages/Test/quote';
import '../../pages/Test/test.css'


const theme = createTheme({
    typography: { fontFamily: ["Abril Fatface"]}
  });
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const Home = () => {
    const [show, setShow] = useState(false);

    const [quotes, setQuotes] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const onSearchSubmit = async term => {
        console.log('New Search submit:', term);
        const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${term}`)
        if (res.status == 200) {
          const quotesArray = await res.json(term.toLowerCase());
          setQuotes(quotesArray);
        } 


        if (res.status == 404) {
            setNoResults();
          }      
        };
      
        const clearResults = () => setQuotes([]);
      
        const renderedQuotes = quotes.map((quote, i) => {
          return <Quote quote={quote} key={i} />
        })

    return (  
    <><ThemeProvider theme={theme}>

            <Box
                class="background"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}>
                <CssBaseline />
                <Container maxWidth="sm">
            
                <IconButton onClick={() => setShow(prev => !prev)} Click size="large" >
                <SearchIcon fontSize="large" />
                </IconButton>
                {show && <Box style={{
        margin: '0 auto',
        maxWidth: 800
      }}>
                    <div className='test'>
  
        <div className='disclaimer-container'>
          <p className='disclaimer'>

          </p>

        </div>
        <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>
        { noResults &&
          <p className='no-results'>
            No results found.
          </p> 
        }

        <div className='main-content'>
          {renderedQuotes}
        </div>
      </div>
                    
                    
                    </Box>}
                
                    <Typography
                        sx={{ pt: 5 }}
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        font= "Abril Fatface"
                        gutterBottom
                    >
                        SWAP
                        <link
                            href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
                            rel="stylesheet" />


                        <Stack
                            sx={{ pt: 55 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center">

                            <Button href="/item-list"
                                style={{
                                    backgroundColor: "#000000",
                                    padding: "18px 36px",
                                    fontSize: "18px",
                                }} variant="contained"> 
                                <a href="#items">Start shopping</a>
                               </Button>
                        </Stack>


                    </Typography>
                </Container>
            </Box>
        </ThemeProvider><body id="items"> 
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


                    <Grid container spacing={4}>


                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            pt: '0%',
                                        }}
                                        image="http://placeimg.com/640/480/animals"
                                        alt="random" />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Gray croptop with blue shorts
                                        </Typography>
                                        <Typography>
                                            This is brief item description
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href="/item-selected"  size="small">View</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* </main> */}
                {/* </ThemeProvider> */}
            </body></>
    
);
} 


export default Home;