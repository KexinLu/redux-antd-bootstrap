import { combineReducers } from 'redux';
import userRoleReducer from 'reducers/userRoleReducer/userRoleReducer';

export default combineReducers({
  user_role: userRoleReducer,
});
