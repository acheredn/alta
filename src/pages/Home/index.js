import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


const Home = () => {
    

      
    return (  
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
        CLOTHING SWAP 
        
    </Typography>
	</Container>
    </Box>
    
);
} 


export default Home;
