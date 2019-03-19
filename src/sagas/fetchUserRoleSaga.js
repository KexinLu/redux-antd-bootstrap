import { put, take, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { getUserRole } from 'api/db';
import { userRole } from 'schema';
import { START_FETCHING_USER_ROLE } from 'actions/actionTypes/userRoleActionTypes';
import { finishFetchingUserRole, failFetchingUserRole } from 'actions/actionCreators/userRoleActions';

const normaliz = data => normalize(data, userRole);
export function* Worker(action) {
  const { id } = action;
  try {
    const response = yield call(getUserRole, id);
    if (response.data) {
      const data = yield call(normaliz, response.data);
      return { data };
    }
    return { error: 'server not responding' };
  } catch (error) {
    return { error: 'server not responding' };
  }
}

export default function* Watcher() {
  while (true) {
    const action = yield take(START_FETCHING_USER_ROLE);
    const { successCallback, failCallback } = action;
    const result = yield call(Worker, action);
    const { error, data } = result;

    if (!error && data) {
      const d = {
        id: data.result,
        entity: data.entities.user_role
      };
      if (successCallback) {
        yield call(successCallback, d);
      }
      yield put(finishFetchingUserRole(d, action.storeKey || ''));
    } else {
      yield put(failFetchingUserRole(error, action.storeKey || ''));
      if (failCallback) { yield call(failCallback, error); }
    }
  }
}
