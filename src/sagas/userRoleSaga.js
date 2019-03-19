import { all } from 'redux-saga/effects';
import PostUserRoleSaga from './postUserRoleSaga';
import FetchUserRoleSaga from './fetchUserRoleSaga';
import FetchUserRoleCollectionSaga from './fetchUserRoleCollectionSaga';
import UpdateUserRoleSaga from './updateUserRoleSaga';
import DeleteUserRoleSaga from './deleteUserRoleSaga';

export default function* userRoleSaga() {
  yield all([
    // START_CREATING_USER_ROLE
    PostUserRoleSaga(),
    // START_FETCHING_USER_ROLE
    FetchUserRoleSaga(),
    // START_FETCHING_USER_ROLE_COLLECTION
    FetchUserRoleCollectionSaga(),
    // START_DELETE_USER_ROLE
    FetchUserRoleCollectionSaga(),
    // START_UPDATE_USER_ROLE
    UpdateUserRoleSaga(),
    // START_DELETE_USER_ROLE
    DeleteUserRoleSaga(),
  ]);
}
