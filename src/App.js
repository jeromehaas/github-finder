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

const App = () => {
  return (
    <Router>
      <div className="App">
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
  );
};

export default connect()(App);
