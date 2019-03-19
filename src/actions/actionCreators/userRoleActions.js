import {
  START_FETCHING_USER_ROLE,
  STOP_FETCHING_USER_ROLE,
  FAIL_FETCHING_USER_ROLE,
  FINISH_FETCHING_USER_ROLE,

  START_UPDATING_USER_ROLE,
  STOP_UPDATING_USER_ROLE,
  FAIL_UPDATING_USER_ROLE,
  FINISH_UPDATING_USER_ROLE,

  START_CREATING_USER_ROLE,
  STOP_CREATING_USER_ROLE,
  FAIL_CREATING_USER_ROLE,
  FINISH_CREATING_USER_ROLE,

  START_DELETING_USER_ROLE,
  STOP_DELETING_USER_ROLE,
  FAIL_DELETING_USER_ROLE,
  FINISH_DELETING_USER_ROLE,

  START_FETCHING_USER_ROLE_COLLECTION,
  STOP_FETCHING_USER_ROLE_COLLECTION,
  FAIL_FETCHING_USER_ROLE_COLLECTION,
  FINISH_FETCHING_USER_ROLE_COLLECTION, FILTER_USER_ROLE
} from 'actions/actionTypes/userRoleActionTypes';

// USER_ROLE
// USER_ROLE - FETCHING
export const startFetchingUserRole = (id, storeKey = '', successCallback = null, failCallback = null) => ({
  type: START_FETCHING_USER_ROLE,
  id,
  storeKey,
  successCallback,
  failCallback,
});

export const stopFetchingUserRole = (storeKey = '') => ({
  type: STOP_FETCHING_USER_ROLE,
  storeKey,
});

export const failFetchingUserRole = (error, storeKey = '') => ({
  type: FAIL_FETCHING_USER_ROLE,
  error,
  storeKey,
});

export const finishFetchingUserRole = (data, storeKey = '') => ({
  type: FINISH_FETCHING_USER_ROLE,
  storeKey,
  data,
});

// USER_ROLE - CREATE
export const startCreatingUserRole = (payload, successCallback = null, failCallback = null) => ({
  type: START_CREATING_USER_ROLE,
  payload,
  successCallback,
  failCallback,
});

export const stopCreatingUserRole = () => ({
  type: STOP_CREATING_USER_ROLE,
});

export const failCreatingUserRole = error => ({
  type: FAIL_CREATING_USER_ROLE,
  error,
});

export const finishCreatingUserRole = data => ({
  type: FINISH_CREATING_USER_ROLE,
  data,
});

// USER_ROLE - UPDATING
export const startUpdatingUserRole = (payload, successCallback = null, failCallback = null) => ({
  type: START_UPDATING_USER_ROLE,
  payload,
  successCallback,
  failCallback,
});

export const stopUpdatingUserRole = () => ({
  type: STOP_UPDATING_USER_ROLE,
});

export const failUpdatingUserRole = error => ({
  type: FAIL_UPDATING_USER_ROLE,
  error,
});

export const finishUpdatingUserRole = data => ({
  type: FINISH_UPDATING_USER_ROLE,
  data,
});

// USER_ROLE - DELETE

// The purpose of successCallback and failCallback is for saga and other action
// processors, reducer should not have side effect as it is an anti-pattern
export const startDeletingUserRole = (id, successCallback = null, failCallback = null) => ({
  type: START_DELETING_USER_ROLE,
  id,
  successCallback,
  failCallback,
});

export const stopDeletingUserRole = () => ({
  type: STOP_DELETING_USER_ROLE
});

export const failDeletingUserRole = error => ({
  type: FAIL_DELETING_USER_ROLE,
  error,
});

export const finishDeletingUserRole = data => ({
  type: FINISH_DELETING_USER_ROLE,
  data,
});

// USER_ROLE_COLLECTION
// USER_ROLE_COLLECTION - FETCHING
export const startFetchingUserRoleCollection = (filters = {}, storeKey = '', successCallback = null, failCallback = null) => ({
  type: START_FETCHING_USER_ROLE_COLLECTION,
  storeKey,
  filters,
  successCallback,
  failCallback,
});

export const stopFetchingUserRoleCollection = (storeKey = '') => ({
  type: STOP_FETCHING_USER_ROLE_COLLECTION,
  storeKey,
});

export const failFetchingUserRoleCollection = (error, storeKey = '') => ({
  type: FAIL_FETCHING_USER_ROLE_COLLECTION,
  error,
  storeKey,
});

export const finishFetchingUserRoleCollection = (data, storeKey = '') => ({
  type: FINISH_FETCHING_USER_ROLE_COLLECTION,
  storeKey,
  data,
});

// USER_ROLE_COLLECTION_FILTER
export const filterUserRole = (filters = {}, storeKey = '') => ({
  type: FILTER_USER_ROLE,
  filters,
  storeKey,
});
