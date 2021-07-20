import { combineReducers } from 'redux';
import usersPosts from './post';

const rootReducer = combineReducers({
  usersPosts,
});

export default rootReducer;
