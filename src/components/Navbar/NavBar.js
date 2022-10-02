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
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
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