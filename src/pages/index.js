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
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = () => {
return (
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
);
};

export default Home;
