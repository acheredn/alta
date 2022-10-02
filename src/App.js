import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import ItemSelected from './pages/itemSelected';
import SignUp from './pages/signup';
import ItemList from './pages/itemList';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Footer from './pages/Footer';

function App() {
    //     const app = initializeApp(firebaseConfig);
    //     const db = getFirestore(app);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/item' element={<ItemSelected />} />
                <Route path='/list' element={<ItemList />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>

    );
}

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}


export default App; 