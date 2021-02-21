const initialState = {
  data: []
};

const alerts = (state = initialState, action) => {
  switch(action.type) {
  case 'UPDATE_ALERT':
    return {
      ...state, 
      data: [...state.data, {}]
    };
  default: 
    return state;
  }
};

export default alerts;