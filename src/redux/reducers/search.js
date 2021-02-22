const initialState = {
  value: ''
};

const search = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH': 
    return {
      ...state, 
      value: action.payload
    };
  default: 
    return state;
  }
};


export default search;