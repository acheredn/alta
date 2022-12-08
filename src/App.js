
import React from "react";
import './App.css';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home/home';
import Profile from './pages/Profile/profile';
import Footer from './components/Footer';
import MyItems from './pages/MyItems/myItems';
import AllItems from './pages/AllItems/AllItems'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthProvider } from "./context.js";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000'
      },
    }
  });
  return (
  
      <ThemeProvider theme={theme}>
          {/* <AuthProvider> */}
          <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/my-items' element={<MyItems />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/all-items' element={<AllItems />} />
          </Routes>
          <Footer />
        </Router>
          {/* </AuthProvider> */}
  
      </ThemeProvider>

 

  );
}


export default App; 
