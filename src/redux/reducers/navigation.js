const initialState ={
  status: 'closed'
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_NAVIGATION':
    return {
      ...state, 
      status: action.payload === 'open' ? 'closed' : 'open'
    };
  default: 
    return state;
  }
};

export default navigation;