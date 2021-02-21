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
export const clearUsers = (username) => ({
  type: CLEAR_USERS, 
  payload: username,
});

const GET_USER_REPOS = 'GET_USER_REPOS';
export const getUserRepos = (username) => ({
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

export const getUserAction = (username) => {
  return (dispatch) => {
    try {
      axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const searchUsersAction = (username) => {
  return  (dispatch) => {  
    fetch(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`, {
      method: 'GET', 
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => dispatch({
        type: 'RECEIVE_USERS',
        payload: data.items
      }))
      .catch(err => console.log(err));
  };
};

export {
  searchUsersAction
};

