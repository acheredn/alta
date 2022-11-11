import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../../pages/Test/searchbar';
import Quote from '../../pages/Test/quote';
import '../../pages/Test/test.css'
import { Link, animateScroll as scroll } from "react-scroll";
import ItemList from '../ItemList/itemList';


const theme = createTheme({
    typography: { fontFamily: ["Abril Fatface"] }
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const scollToTop = () => {
    scroll.scrollToTop();
};


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
                    <IconButton onClick={() => setShow(prev => !prev)} size="large" >
                        <SearchIcon fontSize="large" />
                    </IconButton>
                    {show && <Box style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}>
                        <div className='test'>

                            <div className='disclaimer-container'>
                                <p className='disclaimer' />
                             
                            </div>
                            <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
                            {noResults &&
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
                        font="Abril Fatface"
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

                            <Button

                                style={{
                                    backgroundColor: "#000000",
                                    padding: "18px 36px",
                                    fontSize: "18px",
                                }} variant="contained">
                                <Link
                                    activeClass="active"
                                    to="items"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >Start Shopping</Link>
                            </Button>
                        </Stack>
                    </Typography>
                </Container>
            </Box>
        </ThemeProvider>
            <ItemList />
        </>

    );
}



export default Home;