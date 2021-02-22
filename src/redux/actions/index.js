import axios from 'axios';

const getUser = (username) => {
  return async (dispatch) => {
    await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`, {
      method: 'GET', 
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => dispatch({
        type: 'GET_USER',
        payload: data
      }))
      .catch(err => console.log(err));
  };
};

const searchUsers = (username) => {
  return  (dispatch) => {  
    fetch(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`, {
      method: 'GET', 
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => dispatch({
        type: 'SEARCH_USERS',
        payload: data.items
      }))
      .catch(err => console.log(err));
  };
};

const getUserRepos = (username) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`, {
      method: 'GET', 
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => dispatch({
        type: 'GET_USER_REPOS',
        payload: data
      }))
      .catch(err => console.log(err));
  };
};

const clearUsers = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_USERS',
      payload: []
    });
  };
};

const updateAlert = (message, status) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        message: message,
        status: status
      }
    });
  };
};

const updateLoader = (status) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_LOADER', 
      payload: status
    });
  };
};

const updateSearch = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_SEARCH',
      payload: value
    });
  };
};

export {
  searchUsers,
  getUser,
  getUserRepos,
  clearUsers,
  updateAlert,
  updateLoader,
  updateSearch
};

