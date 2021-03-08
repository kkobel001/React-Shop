import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/images/logo-01.png';

const Nav = styled.div`
  z-index: 99999;
  position: sticky;
  color: ${({ theme }) => theme.colorDark};
  background-color: ${({ theme }) => theme.colorLight};
  height: 150px;
`;

const NavMenu = styled.ul`
  margin: auto;
`;

const NavItem = styled.li`
  margin: auto;
`;

const NavLinks = styled(NavLink)`
  margin: auto;
`;

const Logo = styled.div``;

const Navbar = () => (
  <Nav>
    <Logo>
      <img src={LogoIcon} alt="logo" />
    </Logo>

    <NavMenu>
      <NavItem>
        <NavLinks exact to="/home" activeclass="active">
          Home
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/shop" activeclass="active">
          Shop
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/blog" activeclass="active">
          Blog
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks exact to="/about" activeclass="active">
          About
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
