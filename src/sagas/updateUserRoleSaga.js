import { put, take, call } from 'redux-saga/effects';
import { updateUserRole } from 'api/db';
import { START_UPDATING_USER_ROLE } from 'actions/actionTypes/userRoleActionTypes';
import { finishUpdatingUserRole, failUpdatingUserRole } from 'actions/actionCreators/userRoleActions';

export function* Worker(action) {
  const { payload } = action;
  try {
    const response = yield call(updateUserRole, payload);
    if (response.data) {
      return { data: response.data };
    }
    return { error: 'server not responding' };
  } catch (error) {
    return { error: 'server not responding' };
  }
}

export default function* Watcher() {
  while (true) {
    const action = yield take(START_UPDATING_USER_ROLE);
    const { successCallback, failCallback } = action;
    const result = yield call(Worker, action);
    const { error, data } = result;

    if (!error && data) {
      if (successCallback) {
        yield call(successCallback, data);
      }
      yield put(finishUpdatingUserRole(data));
    } else {
      yield put(failUpdatingUserRole(error));
      if (failCallback) { yield call(failCallback, error); }
    }
  }
}
