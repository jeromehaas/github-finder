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
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  // const getUser = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUser(res.data);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };

  // const searchUsers = async (username) => {
  //   setLoading(true);
  //   // const res = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   let users = props.dispatch(searchUsersAction(username));
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };

  const updateAlert = (message, cat) => {
    setAlert({message, cat});
    setTimeout(() => {
      setAlert(null); 
    }, 5000);
  };

  // const clearUsers =  () => {
  //   setUsers([]);
  // };

  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUserRepos(res.data);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 200);
  // };

  return (
    <Router>
      <div className="App">
        <Navbar title={'GitHub Finder'} icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/user/:login' render={props => (
              <User { ...props } user={user} userRepos={userRepos}  loading={loading} />
            )} />
            <Route exact path='/about' component={About} />
            <Route path='/' render={props => (
              <Fragment>
                <Search   showClear={ users.length ? true : false} updateAlert={updateAlert} />
                <Users users={users} loading={loading} />
              </Fragment>
            )} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};


export default connect()(App);
