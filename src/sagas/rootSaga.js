import { all } from 'redux-saga/effects';
import UserRoleSaga from './userRoleSaga';

export default function* rootSaga() {
  yield all([
    UserRoleSaga()
  ]);
}
