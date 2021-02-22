import { combineReducers } from 'redux';
import alerts from 'redux/reducers/alerts';
import users from 'redux/reducers/users';
import loaders from 'redux/reducers/loaders';


const rootReducer = combineReducers({
  alerts,
  users,
  loaders
});

export default rootReducer;