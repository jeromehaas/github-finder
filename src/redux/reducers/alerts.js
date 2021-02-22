const initialState = {
  message: '',
  status: 'inactive'
};

const alerts = (state = initialState, action) => {
  switch(action.type) {
  case 'UPDATE_ALERT':
    return {
      ...state, 
      message: action.payload.message,
      status: action.payload.status
    };
  default: 
    return state;
  }
};

export default alerts;