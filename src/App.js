import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/layout/Navbar';
import Users from 'components/users/Users';
import User from 'components/users/User';
import axios from 'axios';
import Search from 'components/users/Search';
import Alert from 'components/layout/Alert';
import About from 'components/pages/About';
import { connect } from 'react-redux';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import LightTheme from 'components/themes/Light';
import DarkTheme from 'components/themes/Dark';
import { useDispatch, useSelector } from 'react-redux'; 
import GlobalStyle from 'components/themes/GlobalStyle';



const App = () => {

  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme.style === 'dark' ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Router>
        <div>
          <Navbar title={'People of GitHub'} icon="fab fa-github" />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/user/:login' render={props => (
                <User { ...props } />
              )} />
              <Route exact path='/about' component={About} />
              <Route path='/' render={props => (
                <Fragment>
                  <Search  />
                  <Users  />
                </Fragment>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default connect()(App);
