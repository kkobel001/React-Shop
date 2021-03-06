import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
  z-index: 99999;
  position: sticky;
  color: ${({ theme }) => theme.font.dark};
`;

const NavMenu = styled.div`
  margin: auto;
`;

const NavItem = styled.div`
  margin: auto;
`;

const NavLinks = styled(NavLink)`
  margin: auto;
`;
const Navbar = () => (
  <Nav>
    <NavMenu>
      <NavItem>
        <NavLinks exact to="/home" activeclass="active">
          Home
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/shop" activeclass="active">
          About
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/blog" activeclass="active">
          Gallery
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/about" activeclass="active">
          Contact
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/Contact" activeclass="active">
          Contact
        </NavLinks>
      </NavItem>
    </NavMenu>
  </Nav>
);

export default Navbar;
