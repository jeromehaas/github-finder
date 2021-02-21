const initialState = {
  users: [],
  user: {},
  userRepos: []
};

const users = (state = initialState, action) => {
  switch(action.type) {
  case 'RECEIVE_USERS':
    return {
      ...state, 
      users: action.payload
    };
  default: 
    return state;
  }
};

export default users;



