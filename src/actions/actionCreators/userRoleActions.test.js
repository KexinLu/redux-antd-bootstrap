import {
  // START_FETCHING_USER_ROLE,
  // STOP_FETCHING_USER_ROLE,
  // FAIL_FETCHING_USER_ROLE,
  // FINISH_FETCHING_USER_ROLE,

  START_UPDATING_USER_ROLE,
  // STOP_UPDATING_USER_ROLE,
  // FAIL_UPDATING_USER_ROLE,
  FINISH_UPDATING_USER_ROLE,

  START_CREATING_USER_ROLE,
  // STOP_CREATING_USER_ROLE,
  // FAIL_CREATING_USER_ROLE,
  FINISH_CREATING_USER_ROLE,

  START_DELETING_USER_ROLE,
  // STOP_DELETING_USER_ROLE,
  // FAIL_DELETING_USER_ROLE,
  FINISH_DELETING_USER_ROLE,

  START_FETCHING_USER_ROLE_COLLECTION,
  // STOP_FETCHING_USER_ROLE_COLLECTION,
  // FAIL_FETCHING_USER_ROLE_COLLECTION,
  FINISH_FETCHING_USER_ROLE_COLLECTION,
  FILTER_USER_ROLE
} from 'actions/actionTypes/userRoleActionTypes';

import {
  filterUserRole,
  finishCreatingUserRole, finishDeletingUserRole,
  finishFetchingUserRoleCollection, finishUpdatingUserRole,
  startCreatingUserRole,
  startDeletingUserRole,
  // startFetchingUserRole,
  startFetchingUserRoleCollection,
  startUpdatingUserRole
} from "./userRoleActions";

describe('User Role Action Creators', () => {
  describe('StartCreateUserRole', () => {
    it('should create the correct action', () => {
      const f1 = () => {};
      const f2 = () => {};
      const expected = {
        type: START_CREATING_USER_ROLE,
        payload: {
          key: 'value',
          key2: 'value2',
        },
        successCallback: f1,
        failCallback: f2,
      };
      expect(startCreatingUserRole({ key: 'value', key2: 'value2' }, f1, f2))
        .toEqual(expected);
    });
  });

  describe('FinishCreateUserRole', () => {
    it('should create action with data', () => {
      const expected = {
        type: FINISH_CREATING_USER_ROLE,
        data: { someKey: 'value' },
      };

      expect(finishCreatingUserRole({ someKey: 'value' })).toEqual(expected);
    });
  });

  describe('StartDeletingUserRole', () => {
    it('should create action with id', () => {
      const f1 = () => {};
      const f2 = () => {};
      const expected = {
        type: START_DELETING_USER_ROLE,
        id: 'uuid1',
        successCallback: f1,
        failCallback: f2,
      };

      expect(startDeletingUserRole('uuid1', f1, f2)).toEqual(expected);
    });
  });

  describe('StartDeletingUserRole', () => {
    it('should create action with id', () => {
      const f1 = () => {};
      const f2 = () => {};
      const expected = {
        type: START_DELETING_USER_ROLE,
        id: 'uuid1',
        successCallback: f1,
        failCallback: f2,
      };

      expect(startDeletingUserRole('uuid1', f1, f2)).toEqual(expected);
    });
  });

  describe('FinishDeletingUserRole', () => {
    it('should create action with id', () => {
      const expected = {
        type: FINISH_DELETING_USER_ROLE,
        data: 'uuid1',
      };

      expect(finishDeletingUserRole('uuid1')).toEqual(expected);
    });
  });

  describe('StartFetchingUserRoleCollection', () => {
    it('should create action with storeKey and filters with callbacks', () => {
      const filters = {
        filter1: 'val1',
        filter2: 'val2',
      };
      const storeKey = 'stk';
      const f1 = () => {};
      const f2 = () => {};
      const expected = {
        type: START_FETCHING_USER_ROLE_COLLECTION,
        storeKey,
        filters,
        successCallback: f1,
        failCallback: f2,
      };

      expect(startFetchingUserRoleCollection(
        filters,
        storeKey,
        f1,
        f2
      )).toEqual(expected);
    });
  });

  describe('StartUpdatingUserRole', () => {
    it('should create action with id', () => {
      const payload = {
        k1: 'val1',
        k2: 'val2',
      };
      const f1 = () => {};
      const f2 = () => {};
      const expected = {
        type: START_UPDATING_USER_ROLE,
        payload,
        successCallback: f1,
        failCallback: f2,
      };

      expect(startUpdatingUserRole(payload, f1, f2)).toEqual(expected);
    });
  });

  describe('FinishUpdatingUserRole', () => {
    it('should create action with id', () => {
      const data = {
        k1: 'val1',
        k2: 'val2',
      };
      const expected = {
        type: FINISH_UPDATING_USER_ROLE,
        data,
      };

      expect(finishUpdatingUserRole(
        data,
      )).toEqual(expected);
    });
  });
  describe('FinishFetchingUserRoleCollection', () => {
    // FINISH_FETCHING_USER_ROLE_COLLECTION,
    it('should create action with id', () => {
      const data = {
        k1: 'val1',
        k2: 'val2',
      };
      const storeKey = 'stk';
      const expected = {
        type: FINISH_FETCHING_USER_ROLE_COLLECTION,
        storeKey,
        data,
      };

      expect(finishFetchingUserRoleCollection(
        data,
        storeKey
      )).toEqual(expected);
    });
  });

  describe('filterUserRole', () => {
    it('should create action with storeKey and filters', () => {
      const filters = {
        a: 'v',
        b: 'v2',
      };
      const storeKey = 'stk';
      const expected = {
        type: FILTER_USER_ROLE,
        filters,
        storeKey,
      };
      expect(filterUserRole(filters, storeKey)).toEqual(expected);
    });
  });
});
