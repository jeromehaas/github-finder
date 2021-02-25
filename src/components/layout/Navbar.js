import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Toggle from 'components/partials/Toggle';
import theme from 'components/themes/Light';
import Hamburger from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavigation } from 'redux/actions';

const Nav = styled.nav`
  background-color: ${p => p.theme.primary};
  padding: 15px 30px;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;

  .desktopNav {
    display: block;
  }

  .mobileNav {
    display: none;
  }

  .container {
    max-width: ${p => p.theme.maxWidth};
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger-react,
  .hamburger-react div {
    transition: all 0s ease !important;
  }

  .menu {
    max-height: 0px;
    overflow: hidden;
  }

  .menu.active {
    max-height: unset;
    overflow: hidden;
  }

  i {
    margin-right: 10px;
    font-size: 30px;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    padding: 20px 0;
    margin: 0 auto 0 auto;
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
  }

  li:last-child {
    border: none;
  }

  @media(max-width: 1055px) {
    .container {
    padding: 0;

  }

}

  @media(max-width: 760px) {
    .desktopNav {
    display: none;
  }

  .mobileNav {
    display: block;
  }

 h1 {
   font-size: 20px;
 }

  i {
    margin-right: 10px;
    font-size: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  
  li {
    margin: 0 auto 0 auto;
  }

  }
`;

const Navbar = ({ icon, title }) => {

  const dispatch = useDispatch();
  const navigation = useSelector((state) => state.navigation);

  return (
    <Nav>
      <div className="desktopNav">
        <div className="container">

          <h1> 
            <i className={ icon }></i> { title }
          </h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Toggle isActive={theme.id === 'light'} /></li>
          </ul>
        </div>
      </div> 
      <div className="mobileNav">
        <div className="container">
          <h1> 
            <i className={ icon }></i> { title }
          </h1>
          <ul>
            <Hamburger toggled={navigation.status === 'open' ? true : false } toggle={() => dispatch(toggleNavigation(navigation.status))} />
          </ul>
        </div>
        <div className={`menu ${navigation.status === 'open' ? 'active' : 'closed'}`}>
          <ul>
            {/* <li><Link to='/about' onClick={() => dispatch(toggleNavigation(navigation.status))}>About</Link></li> */}
            <li><Link to='/' onClick={() => dispatch(toggleNavigation(navigation.status))}>Home</Link></li>
            <li><Toggle isActive={theme.id === 'light'} /></li> 
          </ul>
        </div>
      </div>
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
