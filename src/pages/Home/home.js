import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bg1 from '../../images/background1.jpg';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import algoliasearch from 'algoliasearch/lite';
import { InfinitySpin } from 'react-loader-spinner';
import { AuthContext } from '../../context';
import { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCircleCheck, faBullseye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';





import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Pagination
} from 'react-instantsearch-dom';
import Hit from './hit'
import './home.css'
import tribui from '../../images/tri.jpeg'
import tola from '../../images/tola.jpg'
import lorena from '../../images/lorena.jpeg'
import aurum from '../../images/aurum.jpg'



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
            variant="h1"
            align="center"
            color="text.primary"
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
                <a id="start-shopping"
                  activeClass="active"
                  href={(!user) ? '/login' : '#searchbox'}
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

      <section id="features">
        <div class="row">
          <div class="feature-box col-lg-4 col-md-12">
            <FontAwesomeIcon class="icon fa-solid fa-circle-check fa-4x" icon={faCircleCheck} />
            <h3 class="feature-text-1">Safety</h3>
            <p class="feature-text-2">Only Macalester student can access</p>
          </div>
          <div class="feature-box col-lg-4 col-md-12 ">
            <FontAwesomeIcon class="icon fa-solid fa-bullseye fa-4x" icon={faBullseye} />
            <h3 class="feature-text-1">Elite Clientele</h3>
            <p class="feature-text-2">We have all kinds of clothes, from cheapest to coolest.</p>
          </div>
          <div class="feature-box col-lg-4 col-md-12">
            <FontAwesomeIcon class="icon fa-solid fa-heart fa-4x" icon={faHeart} />
            <h3 class="feature-text-1">User friendly.</h3>
            <p class="feature-text-2">Easy to use, one click to connect!</p>
          </div>
        </div>
      </section>

      <div className="container">
        {user ? <InstantSearch searchClient={searchClient} indexName="items">
          <Configure hitsPerPage={6} />
          <div id="searchbox"> <SearchBox translations={{ placeholder: "Search for items" }} /> </div>
          <div id="hits"> <Hits hitComponent={Hit} /> </div>
          <div id="pagination"> <Pagination /> </div>
        </InstantSearch> : <h1 id="lets-begin">Let's begin with the Start Shopping button!</h1>}

      </div>
      {user ?
        <div id="testimonials">

          <Carousel fade className="customers-carousel-container h-100">
            <Carousel.Item class="carousel-item">
              <img

                class="testimonial-image" src={tribui} alt="tri-bui" />
              <Carousel.Caption >
                <h2 class="testimonial-text"> Loop is incredibly easy to use, just wanna say awesome thanks Alta Team!</h2>
                <em>Tri Bui, sophomore</em>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item class="carousel-item">
              <img class="testimonial-image" src={tola} alt="tola" />
              <Carousel.Caption>
                <h2 class="testimonial-text"> I love loop. That's all</h2>
                <em>Anatoliy, senior</em>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item class="carousel-item">
              <img class="testimonial-image" src={lorena} alt="lorena" />
              <Carousel.Caption >
                <h2 class="testimonial-text"> You guys have to try this. Find your favorite clothes so quick!</h2>
                <em>Lorena, junior</em>
              </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item class="carousel-item" >
              <img class="testimonial-image" src={aurum} alt="aurum" />
              <Carousel.Caption >
                <h2 class="testimonial-text"> Make new friends by this website too! </h2>
                <em>Aurum, sophomore</em>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        : null}


    </div>
  );
}

export default Home;