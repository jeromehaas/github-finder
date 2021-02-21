const initialState = {
  users: [],
  user: {},
  userRepos: []
};

const users = (state = initialState, action) => {
  switch(action.type) {
  case 'SEARCH_USERS':
    return {
      ...state, 
      users: action.payload
    };
  case 'GET_USER':
    return {
      ...state, 
      user: action.payload
    };
  case 'GET_USER_REPOS':
    return {
      ...state, 
      repos: action.payload
    };
  case 'CLEAR_USERS':
    return {
      ...state, 
      users: []
    };
  default: 
    return state;
  }
};

export default users;



