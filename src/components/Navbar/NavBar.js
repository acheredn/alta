// import React, { useState } from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import { MdClose } from "react-icons/md"
// import { FiMenu } from "react-icons/fi"
// import 'bootstrap/dist/css/bootstrap.css';

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false)
//   const handleToggle = () => {
//     setNavbarOpen(prev => !prev)
//     const navRef = useRef();

//     const showNavbar = () => {
//       navRef.current.classList.toggle("responsive_nav");
//     };
//   }
//   return (
//     <>
//       <Nav>

//         <NavMenu className="col-lg-12 col-md-12 col-sm-12">
//           <NavLink to="/ " activeStyle>
//             Welcome
//           </NavLink>
//           <NavLink to="/login" activeStyle>
//             Login
//           </NavLink>
//           <NavLink to="/item" activeStyle>
//             Item Selected
//           </NavLink>
//           <NavLink to="/list" activeStyle>
//             Item List
//           </NavLink>
//           <NavLink to="/sign-up" activeStyle>
//             Sign Up
//           </NavLink>
//           <button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
//           {/* <nav className="navBar">
//             <button onClick={handleToggle}>
//               {navbarOpen ? (
//                 <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
//               ) : (
//                 <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
//               )}
//             </button>
//             <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
//           </nav> */}
//         </NavMenu>
//         <button className="nav-btn" onClick={showNavbar}>
// 				<FaBars />
// 			</button>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Welcome</a>
				<a href="login">Login</a>
				<a href="item-selected">Item Selected</a> 
				<a href="sign-up">Sign Up</a>
				<a href="item-list">Item List</a>
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
