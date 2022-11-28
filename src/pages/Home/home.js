import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../../pages/Test/test.css'
import { Link, animateScroll as scroll } from "react-scroll";
import ItemList from '../ItemList/itemList';


import AllItems from '../AllItems/AllItems';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const scollToTop = () => {
    scroll.scrollToTop();
};


const Home = () => {

    return (
        <>
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
            <ItemList />
        </>

    );
}



export default Home;