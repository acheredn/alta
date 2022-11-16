import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import React from 'react';
import "react-slideshow-image/dist/styles.css";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import {logout, auth} from '../../firebase.js'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Navbar() {

	// const auth = getAuth();
	// const user = auth.currentUser;
	// if (user !== null) {
	// 	// The user object has basic properties such as display name, email, etc.
	// 	const displayName = user.displayName;
	// 	const email = user.email;
	// 	const photoURL = user.photoURL;
	// 	const emailVerified = user.emailVerified;

	// 	// The user's ID, unique to the Firebase project. Do NOT use
	// 	// this value to authenticate with your backend server, if
	// 	// you have one. Use User.getToken() instead.
	// 	const uid = user.uid;
	// }


	const [scrolled, setScrolled] = React.useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true);
		}
		else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let navbarClasses = ['navbar'];
	if (scrolled) {
		navbarClasses.push('scrolled');
	}

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const [user, loading, error] = useAuthState(auth);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
		  backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
		  marginLeft: theme.spacing(1),
		  width: 'auto',
		},
	  }));
	  
	  const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  }));
	  
	  const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
		  padding: theme.spacing(1, 1, 1, 0),
		  // vertical padding + font size from searchIcon
		  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		  transition: theme.transitions.create('width'),
		  width: '100%',
		  [theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
			  width: '20ch',
			},
		  },
		},
	  }));

	return (
		<header className={navbarClasses.join(" ")}>
			<a class="logo" href="/#">SWAP</a>
			<nav ref={navRef}>
				<a href="/#">Welcome</a>
				<a href="login">Login</a>
				<a href="item-selected">Item Selected</a>
				{/* <a href="sign-up">Sign Up</a> */}
				<a href="my-items">My Items</a>
				<a href="test"> Test </a>
				<Search>
					<SearchIconWrapper>
					<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
				<IconButton onClick={handleOpenUserMenu} sx={{ width: .09 }}>
					<img src="http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile-hi.png"></img>
				</IconButton>
				 {user ? (
				<Typography>
					{user.displayName}
				</Typography>): (
				<a href="login">Login</a>)} 
				<Menu
					sx={{ mt: '25px' }}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
				>
					<MenuItem>
						Profile
					</MenuItem>
					<MenuItem onClick={logout}>
						Logout
					</MenuItem>
				</Menu>
			</nav>
		</header>
	);
}

export default Navbar;