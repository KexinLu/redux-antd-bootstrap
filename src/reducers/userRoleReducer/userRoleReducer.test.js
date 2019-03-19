import expect from 'expect';
import reducer, {
  INITIAL_STATE,
  withStoreKey,
  handleStartAction,
  handleFailAction,
  handleFinishAction,
} from 'reducers/userRoleReducer/userRoleReducer';

describe('Test User Role Reducer', () => {
  describe('withStoreKey', () => {
    it('no key is provided', () => {
      const initial = {
        some_key: 'some_val',
        stores: {
          a1: {
            some_key: 'some_val'
          },
          a2: {
            some_key: 'some_val'
          }
        }
      };
      const expected = {
        some_key: 'changed',
        stores: {
          a1: {
            some_key: 'some_val'
          },
          a2: {
            some_key: 'some_val'
          }
        }
      };
      expect(
        withStoreKey(initial, '', { val: 'changed' }, (s, a) => ({ ...s, some_key: a.val }))
      ).toEqual(expected);
    });
    it('key is provided', () => {
      const initial = {
        some_key: 'some_val',
        stores: {
          a1: {
            some_key: 'some_val'
          },
          a2: {
            some_key: 'some_val'
          }
        }
      };
      const expected = {
        some_key: 'some_val',
        stores: {
          a1: {
            some_key: 'changed'
          },
          a2: {
            some_key: 'some_val'
          }
        }
      };
      expect(
        withStoreKey(initial, 'a1', { val: 'changed' }, (s, a) => ({ ...s, some_key: a.val }))
      ).toEqual(expected);
    });
  });

  describe('handleStartAction', () => {
    it('should set action to true, fail to false and error to empty', () => {
      const keySet = {
        actionKey: 'a',
        failKey: 'f',
        errorKey: 'e',
      };

      const state = {
        a: false,
        f: true,
        e: 'some error',
        other: 'something else',
      };

      const expected = {
        a: true,
        f: false,
        e: '',
        other: 'something else',
      };

      expect(handleStartAction(state, keySet)).toEqual(expected);
    });
  });

  describe('handleFinishAction', () => {
    it('should set action to false, fail to false and error to empty', () => {
      const keySet = {
        actionKey: 'a',
        failKey: 'f',
        errorKey: 'e',
      };

      const state = {
        a: true,
        f: true,
        e: 'some error',
        other: 'something else',
      };

      const expected = {
        a: false,
        f: false,
        e: '',
        other: 'something else',
      };

      expect(handleFinishAction(state, keySet)).toEqual(expected);
    });
  });

  describe('handleFailAction', () => {
    it('should set action to false, fail to false and error to error', () => {
      const keySet = {
        actionKey: 'a',
        failKey: 'f',
        errorKey: 'e',
      };

      const state = {
        a: true,
        f: false,
        e: '',
        other: 'something else',
      };

      const expected = {
        a: false,
        f: true,
        e: 'some error',
        other: 'something else',
      };

      expect(handleFailAction(state, { error: 'some error' }, keySet)).toEqual(expected);
    });
  });

  describe('userRoleReducer', () => {
    it('should return initial state', () => {
      expect(
        reducer(undefined, {})
      ).toEqual({
        stores: {},
        ...INITIAL_STATE
      });
    });
  });
});
