import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (
    <>
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
          <nav className="navBar">
            <button onClick={handleToggle}>
              {navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
              ) : (
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
              )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
          </nav>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;