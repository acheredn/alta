import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: { fontFamily: ["Abril Fatface"]}
  });

const Home = () => {

    return (  
    <ThemeProvider theme={theme}>
    <Box
        class="background"
        style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
    }}> 
    <CssBaseline/>
	<Container maxWidth="sm">
        <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
        >
        Clothing Swap 
        <link
        href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
        rel="stylesheet"/>

    </Typography>
	</Container>
    </Box>
    </ThemeProvider>
    
);
} 


export default Home;
