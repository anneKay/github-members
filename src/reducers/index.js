import { combineReducers } from 'redux';
import memberListReducer from './memberListReducer';

export default () => 
  combineReducers({
    memberListReducer,
  });
