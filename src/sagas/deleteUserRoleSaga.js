import { put, take, call } from 'redux-saga/effects';
import { deleteUserRole } from 'api/db';
import { START_DELETING_USER_ROLE } from 'actions/actionTypes/userRoleActionTypes';
import { finishDeletingUserRole, failDeletingUserRole } from 'actions/actionCreators/userRoleActions';

export function* Worker(action) {
  const { id } = action;
  try {
    const response = yield call(deleteUserRole, id);
    if (response.data) {
      return response;
    }
    return { error: 'server not responding' };
  } catch (error) {
    return { error: 'server not responding' };
  }
}

export default function* Watcher() {
  while (true) {
    const action = yield take(START_DELETING_USER_ROLE);
    const { successCallback, failCallback } = action;
    const result = yield call(Worker, action);
    const { error, data } = result;

    if (!error && data) {
      if (successCallback) {
        yield call(successCallback, result);
      }
      yield put(finishDeletingUserRole(result.data));
    } else {
      yield put(failDeletingUserRole(error));
      if (failCallback) { yield call(failCallback, error); }
    }
  }
}
