import axios from 'axios';

// const GET_USER = 'GET_USER';
// export const getUser = (username) => ({
//   type: GET_USER,
//   username: username
// });

const RECEIVE_USERS = 'SEARCH_USERS';
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  payload: users
});

const CLEAR_USERS = 'CLEAR_USERS';
export const removeUsers = (username) => ({
  type: CLEAR_USERS, 
  payload: username,
});

const GET_USER_REPOS = 'GET_USER_REPOS';
export const receiveRepos = (username) => ({
  type: GET_USER_REPOS,
  payload: username
});

const UPDATE_ALERT = 'UPDATE_ALERT';
const updateAlert = (message, cat) => ({
  type: UPDATE_ALERT,
  payload: {
    cat,
    message
  }, 
  
});

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

export {
  searchUsers,
  getUser,
  getUserRepos,
  clearUsers
};

