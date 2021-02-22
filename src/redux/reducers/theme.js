const initialState ={
  style: 'dark'
};

const theme = (state = initialState, action) => {
  switch (action.type) {
  case 'TOGGLE_THEME':
    return {
      ...state, 
      style: action.payload === 'dark' ? 'light' : 'dark'
    };
  default: 
    return state;
  }
};

export default theme;