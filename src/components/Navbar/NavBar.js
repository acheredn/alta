<<<<<<< Updated upstream
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import "react-slideshow-image/dist/styles.css";
import { Container } from '@mui/system';


=======
import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import Grid from '@mui/material/Grid';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (
      <Nav>

        <NavMenu> 
        <NavLink to="/ " activeStyle>
            Welcome 
          </NavLink>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/item" activeStyle>
            Item Selected
          </NavLink>
          <NavLink to="/list" activeStyle>
            Item List 
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          {/* <nav className="navBar">
            <button onClick={handleToggle}>
              {navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
              ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
              )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
          </nav> */}
        </NavMenu>
      </Nav>
  );
};
>>>>>>> Stashed changes

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<a class = "logo" href = "/#">SWAP</a>
			<nav ref={navRef}>
				<a href="/#">Welcome</a>
				<a href="login">Login</a>
				<a href="item-selected">Item Selected</a> 
				<a href="sign-up">Sign Up</a>
				<a href="item-list">Item List</a>
				<a href="my-items">My Items</a>
				<a href="chat">Chat</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
