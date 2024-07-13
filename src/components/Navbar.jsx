import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navlist = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Properties",
      submenu: [
        { name: "Apartment", link: "/apartment" },
        { name: "Villa", link: "/villa" },
        { name: "Plots", link: "/plots" },
      ],
    },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <Logo>MyLogo</Logo>
      </Link>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navlist.map((item, index) =>
          item.submenu ? (
            <Dropdown key={item.name}>
              <DropdownToggle onClick={() => toggleDropdown(index)}>
                {item.name} <FaCaretDown />
              </DropdownToggle>
              <DropdownMenu isOpen={openDropdown === index}>
                {item.submenu.map((subItem) => (
                  <DropdownItem key={subItem.name}>
                    <Link to={subItem.link}>{subItem.name}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <MenuItem key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </MenuItem>
          )
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #f98866;
   color: #fff2d7;
   
    font-family:Rubik, sans-serif;
    font-weight:400;
    font-size:15px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure the navbar is above other content */
   @media (max-width: 1024px) {
    width:100%;
     max-width:1024px;
   }
     @media (max-width: 768px) {
   
     max-width:768px;
   }
      @media (max-width: 425px) {
  
     max-width:425px;
   }
     @media (max-width: 375px) {
   
     max-width:375px;
   }
      @media (max-width: 320px) {
   
     max-width:320px;
   }
 
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #333;
    padding: 20px;
    text-align: center;
    z-index: 999; /* Ensure the menu is above the banner */
  }

   
`;

const MenuItem = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    &:hover {
      color: black;
    }
    @media (max-width: 768px) {
      display: block;
      padding: 10px 0;
    }
  }
`;

const Dropdown = styled.li`
  position: relative;
  cursor: pointer;
  list-style: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DropdownToggle = styled.div`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    display: block;
    padding: 10px 0;
  }
`;

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: #333;
  padding: 10px 0;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the dropdown menu is above other content */
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const DropdownItem = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px 20px;
    &:hover {
      background: #f4a261;
    }
    @media (max-width: 768px) {
      padding: 10px 0;
    }
  }
`;
// const navlist = styled.li`
//  color:yellow;

// `