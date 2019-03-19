import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import entities from 'reducers/entityReducer';

export default history => combineReducers({
  router: connectRouter(history),
  entities
});
