const initialState = {
  status: 'inactive'
};

const loaders = (state = initialState, action) => {
  switch(action.type) {
  case 'UPDATE_LOADER':
    return {
      ...state, 
      status: action.payload
    };
  default: 
    return state;
  }
};

export default loaders;