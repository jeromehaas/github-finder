import { combineReducers } from 'redux';
import alerts from 'redux/reducers/alerts';
import users from 'redux/reducers/users';


const rootReducer = combineReducers({
  alerts,
  users
});

export default rootReducer;