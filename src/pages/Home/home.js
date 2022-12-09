import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg1 from '../../images/background1.jpg';
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
        width='130'
        height='130'
        color="black"
      />
    </div>
  }




  return (
    <div id="body">
      <Box
        class="background"
        style={{
          backgroundImage: `url(${bg1})`,
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
              <Button
                style={{
                  backgroundColor: "#000000",
                  padding: "18px 36px",
                  fontSize: "18px",
                }} variant="contained">
                <a
                  activeClass="active"
                  href={(!user) ? '/login' : '/all-items'}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >Start Shopping</a>
              </Button>
            </Stack>
          </Typography>
        </Container>
      </Box>
      <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A5DQhbrKoB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="container">



        <InstantSearch className="searchbar-input" searchClient={searchClient} indexName="items">
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">

              <RefinementList attribute="items" />

            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
              />

              <Hits hitComponent={Hit} />


            </div>
          </div>
        </InstantSearch>
      </div>

      <AllItems />
    </div>


  );
}



export default Home;