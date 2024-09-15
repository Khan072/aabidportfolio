import React from 'react';
import styled from 'styled-components';
import logoAA from '../logoAA.png'; // Ensure the path is correct

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: start;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

`;

const Logo = styled.img`
  height: 50px; /* Adjust the height as needed */
  width: 50px; /* Ensure width is the same as height to make it circular */
  border-radius: 50%; /* This makes the image circular */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  margin-right: 20px; /* Space between the logo and the navigation links */
  cursor: pointer; /* Changes the cursor to a pointer when hovering over the logo */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <a href="#hero">
        <Logo src={logoAA} alt="Aabid Logo" /> {/* Circular logo image */}
      </a>
      <NavList>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#resources">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Project</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
