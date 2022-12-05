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
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Panel,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import Hit from './hit'
import './home.css'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const searchClient = algoliasearch(
    'FUH27QK0B4',
    '95975dfd853601f433605af8a9de4734'
  );

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
                        LOOP
                        <Stack
                            sx={{ pt: 55 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center">
                            <Button Link to='#items'
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
            <div className="container">
        
        <InstantSearch className = "searchbar-input" searchClient={searchClient} indexName="items">
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters">
              {/* <Panel header="Search"> */}
                <RefinementList attribute="items" />
              {/* </Panel> */}
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                // translations={{
                //   placeholder: '',
                // }}
              />

              <Hits hitComponent={Hit} />

              {/* <div className="pagination">
                <Pagination />
              </div> */}
              
            </div>
          </div>
        </InstantSearch>
      </div>
      
            <AllItems />
        </>

    );
}



export default Home;