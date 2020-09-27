import { combineReducers } from 'redux';
import memberDetail from './memberDetailsReducer';

export default () => 
  combineReducers({
    memberDetail,
});
