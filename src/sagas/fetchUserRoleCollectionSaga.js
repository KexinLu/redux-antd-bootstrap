import { put, take, call } from 'redux-saga/effects';
import { getUserRoles } from 'api/db';
import { START_FETCHING_USER_ROLE_COLLECTION } from 'actions/actionTypes/userRoleActionTypes';
import { finishFetchingUserRoleCollection, failFetchingUserRoleCollection } from 'actions/actionCreators/userRoleActions';

export function* FetchEntityWorker(action) {
  const { filters } = action;
  try {
    const response = yield call(getUserRoles, filters);
    if (response.data) {
      return { data: response.data };
    }
    return { error: 'server not responding' };
  } catch (error) {
    return { error: 'server not responding' };
  }
}

export default function* FetchEntityCollectionWatcher() {
  while (true) {
    const action = yield take(START_FETCHING_USER_ROLE_COLLECTION);
    const { successCallback, failCallback } = action;
    const result = yield call(FetchEntityWorker, action);
    const { error, data } = result;

    if (!error && data) {
      if (successCallback) {
        yield call(successCallback, data);
      }
      yield put(finishFetchingUserRoleCollection(data, action.storeKey || ''));
    } else {
      yield put(failFetchingUserRoleCollection(error, action.storeKey || ''));
      if (failCallback) { yield call(failCallback, error); }
    }
  }
}
