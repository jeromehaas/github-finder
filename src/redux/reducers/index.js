import { combineReducers } from 'redux';
import alerts from 'redux/reducers/alerts';
import users from 'redux/reducers/users';
import loaders from 'redux/reducers/loaders';
import search from 'redux/reducers/search';
import theme from 'redux/reducers/theme';
import navigation from 'redux/reducers/navigation';

const rootReducer = combineReducers({
  alerts,
  users,
  loaders,
  search,
  theme, 
  navigation
});

export default rootReducer;