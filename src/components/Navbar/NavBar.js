import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import "react-slideshow-image/dist/styles.css";
import { Container } from '@mui/system';



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
