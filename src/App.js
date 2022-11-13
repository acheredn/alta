
import React, {useState} from "react";
import './App.css';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Home from './pages/Home/index';
import Login from './pages/Login/login';
import ItemSelected from './pages/ItemSelected/itemSelected';
import SignUp from './pages/SignUp/signup';
import Test from './pages/Test/test';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Footer from './components/Footer';
import MyItems from './pages/MyItems/myItems';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {

    const theme = createTheme({
      typography: {
        fontFamily:  ["Abril Fatface", "cursive"].join(",")
      },
        palette: {
          primary: {
            main: '#000000'
          },
        }
      });
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/item-selected' element={<ItemSelected />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/my-items' element={<MyItems />} />
                <Route path='/test' element={<Test />} />
            </Routes>
            <Footer />
        </Router>
        </ThemeProvider>

    );
}


export default App; 