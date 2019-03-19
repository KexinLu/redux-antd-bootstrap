import { put, take, call } from 'redux-saga/effects';
import { postUserRole } from 'api/db';
import { START_CREATING_USER_ROLE } from 'actions/actionTypes/userRoleActionTypes';
import { finishCreatingUserRole, failCreatingUserRole } from 'actions/actionCreators/userRoleActions';

export function* Worker(action) {
  const { payload } = action;
  try {
    const response = yield call(postUserRole, payload);
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
    const action = yield take(START_CREATING_USER_ROLE);
    const { successCallback, failCallback } = action;
    const result = yield call(Worker, action);
    const { error, data } = result;

    if (!error && data) {
      if (successCallback) {
        yield call(successCallback, data);
      }
      yield put(finishCreatingUserRole(data));
    } else {
      yield put(failCreatingUserRole(error));
      if (failCallback) { yield call(failCallback, error); }
    }
  }
}
