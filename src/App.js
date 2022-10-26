import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Home from './pages/Home/index';
import Login from './pages/Login/login';
import ItemSelected from './pages/ItemSelected/itemSelected';
import SignUp from './pages/SignUp/signup';
import ItemList from './pages/ItemList/itemList';
import Chat from './pages/Chat/chat'
import Test from './pages/Test/test';
import MyItem from './pages/MyItems/myItems'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Footer from './components/Footer';
import MyItems from './pages/MyItems/myItems';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
    //     const app = initializeApp(firebaseConfig);
    //     const db = getFirestore(app);

    const theme = createTheme({
        palette: {
          primary: {
            main: '#000000'
          },
        //   secondary: {
        //     main: "#494c7d"
        //   }
        }
      });

    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/item-selected' element={<ItemSelected />} />
                <Route path='/item-list' element={<ItemList />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/my-items' element={<MyItems />} />
                <Route path='/test' element={<Test />} />
            </Routes>
            <Footer />
        </Router>
        </ThemeProvider>

    );
}

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}


export default App; 