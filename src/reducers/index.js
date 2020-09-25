import { combineReducers } from 'redux';
import memberListReducer from './memberListReducer';
import memberDetailReducer from './memberDetailsReducer';

export default () => 
  combineReducers({
    memberListReducer,
    memberDetailReducer,
  });
