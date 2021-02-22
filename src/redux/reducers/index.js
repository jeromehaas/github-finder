import { combineReducers } from 'redux';
import alerts from 'redux/reducers/alerts';
import users from 'redux/reducers/users';
import loaders from 'redux/reducers/loaders';
import search from 'redux/reducers/search';

const rootReducer = combineReducers({
  alerts,
  users,
  loaders,
  search
});

export default rootReducer;