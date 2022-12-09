import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg from '../../images/background.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, animateScroll as scroll } from "react-scroll";
import AllItems from '../AllItems/AllItems';
import algoliasearch from 'algoliasearch/lite';
import { InfinitySpin } from 'react-loader-spinner';
import { AuthContext } from '../../context';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  RefinementList,
  Pagination
} from 'react-instantsearch-dom';
import Hit from './hit'
import './home.css'

const searchClient = algoliasearch(
  'FUH27QK0B4',
  '95975dfd853601f433605af8a9de4734'
);


const Home = () => {

  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  /* function to get all Items from firestore in realtime */
  useEffect(() => {
    setTimeout(() => { // simulate a delay
      if (!user) {
        setLoading(false); //set loading state
      }
    }, 500);
    console.log("user data successfully loaded")

  }, []);
  if (isLoading) {
    return <div class="spinner-container">
      <InfinitySpin
        width='700'
        height='700'
        color="black"
      />
    </div>
  }

  return (
    <div id="body">
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
            LOOP
            <Stack
              sx={{ pt: 55 }}
              direction="row"
              spacing={2}
              justifyContent="center">
              <Button Link to='/login'
                style={{
                  backgroundColor: "#000000",
                  padding: "18px 36px",
                  fontSize: "18px",
                }} variant="contained">
                <Link
                  activeClass="active"
                  to='/login'
                  // to= {user!=NULL? items : }
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

      
      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="items"> 
          <Configure hitsPerPage={6} />
          <div id="searchbox"> <SearchBox translations={{ placeholder: "Search for items" }}/> </div>
          <div id="hits"> <Hits hitComponent={Hit} /> </div>
          <div id="pagination"> <Pagination /> </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default Home;