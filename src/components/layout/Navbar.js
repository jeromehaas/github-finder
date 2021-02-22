import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Toggle from 'components/partials/Toggle';
import theme from 'components/themes/Light';

const Nav = styled.nav`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;

`;

const Navbar = ({ icon, title }) => {

  return (
    <Nav>
      <h1> 
        <i className={ icon }></i> { title }
      </h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <Toggle isActive={theme.id === 'light'} />
      </ul>
    </Nav>
  );
};


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};

export default Navbar;
