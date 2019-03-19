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
  FINISH_FETCHING_USER_ROLE_COLLECTION,


  FILTER_USER_ROLE,

  /**
   *
   *
   START_UPDATING_USER_ROLE_COLLECTION,
   STOP_UPDATING_USER_ROLE_COLLECTION,
   FAIL_UPDATING_USER_ROLE_COLLECTION,
   FINISH_UPDATING_USER_ROLE_COLLECTION,
   */
} from 'actions/actionTypes/userRoleActionTypes';

export const CREATE_KEY_SET = {
  actionKey: 'creating',
  failKey: 'createFailed',
  errorKey: 'createError',
};

export const UPDATE_KEY_SET = {
  actionKey: 'updating',
  failKey: 'updateFailed',
  errorKey: 'updateError',
};

export const FETCH_KEY_SET = {
  actionKey: 'fetching',
  failKey: 'fetchFailed',
  errorKey: 'fetchError',
};

export const DELETE_KEY_SET = {
  actionKey: 'deleting',
  failKey: 'deleteFailed',
  errorKey: 'deleteError',
};

export const FETCHING_ID = 'fetchingId';
export const FOCUSING = 'focusing';
export const HAS_DATA = 'hasData';
export const ENTITIES = 'entities';
export const FETCH_FILTERS = 'fetchFilters';
export const OLD_FETCH_FILTERS = 'oldFetchFilters';
export const FILTERS = 'filters';
export const IDS = 'ids';
export const STORES = 'stores';

export const INITIAL_STATE = {
  [IDS]: [],

  [FETCH_FILTERS]: {},
  [OLD_FETCH_FILTERS]: {},
  [FILTERS]: {},

  [ENTITIES]: {},

  [HAS_DATA]: false,
  [FOCUSING]: '',

  [FETCH_KEY_SET.actionKey]: false,
  [FETCH_KEY_SET.failKey]: false,
  [FETCH_KEY_SET.errorKey]: '',
  [FETCHING_ID]: '',

  [UPDATE_KEY_SET.actionKey]: false,
  [UPDATE_KEY_SET.failKey]: false,
  [UPDATE_KEY_SET.errorKey]: '',

  [CREATE_KEY_SET.actionKey]: false,
  [CREATE_KEY_SET.failKey]: false,
  [CREATE_KEY_SET.errorKey]: '',

  [DELETE_KEY_SET.actionKey]: false,
  [DELETE_KEY_SET.failKey]: false,
  [DELETE_KEY_SET.errorKey]: '',
};

export const withStoreKey = (state, storeKey, action, handler) => {
  let toChange = INITIAL_STATE;

  if (storeKey === '') {
    return handler(state, action);
  } else if (storeKey in state[STORES]) {
    toChange = state[storeKey];
  }
  const result = handler(toChange, action);
  return {
    ...state,
    [STORES]: {
      ...state[STORES],
      [storeKey]: {
        ...(state[storeKey] || {}),
        ...result
      }
    }
  };
};

export const handleStartAction = (state, keySet) => {
  const { actionKey, failKey, errorKey } = keySet;

  return {
    ...state,
    [actionKey]: true,
    [failKey]: false,
    [errorKey]: '',
  };
};

const handleStartCreateEntity = state => handleStartAction(state, CREATE_KEY_SET);
const handleStartFetch = state => handleStartAction(state, FETCH_KEY_SET);
const handleStartUpdateEntity = state => handleStartAction(state, UPDATE_KEY_SET);
const handleStartDeleteEntity = state => handleStartAction(state, DELETE_KEY_SET);

export const handleStartFetchEntityCollection = (state, action) => {
  const { filters } = action;
  return handleStartFetch({
    ...state,
    [FETCH_FILTERS]: filters || {},
    [OLD_FETCH_FILTERS]: state[FETCH_FILTERS] || {},
    [FETCH_KEY_SET.errorKey]: '',
  }, action);
};

export const handleStartFetchEntity = (state, action) => {
  const { id } = action;
  return handleStartFetch({
    ...state,
    [FETCHING_ID]: id
  },
  action
  );
};

export const handleFailAction = (state, action, keySet) => {
  const { actionKey, failKey, errorKey } = keySet;

  return {
    ...state,
    [actionKey]: false,
    [failKey]: true,
    [errorKey]: action.error,
  };
};
const handleFailCreatingEntity = (state, action) => handleFailAction(state, action, CREATE_KEY_SET);
const handleFailFetchingEntity = (state, action) => handleFailAction(state, action, FETCH_KEY_SET);
const handleFailUpdatingEntity = (state, action) => handleFailAction(state, action, UPDATE_KEY_SET);
const handleFailDeleteEntity = (state, action) => handleFailAction(state, action, DELETE_KEY_SET);

const handleStopAction = (state, keySet) => handleFailAction(state, { error: `${keySet.actionKey} stopped by user` }, keySet);
const handleStopCreatingEntity = state => handleStopAction(state, CREATE_KEY_SET);
const handleStopFetchingEntity = state => handleStopAction(state, FETCH_KEY_SET);
const handleStopUpdatingEntity = state => handleStopAction(state, UPDATE_KEY_SET);
const handleStopDeleteEntity = state => handleStopAction(state, DELETE_KEY_SET);

export const handleFinishAction = (state, keySet) => {
  const { actionKey, failKey, errorKey } = keySet;

  return {
    ...state,
    [actionKey]: false,
    [failKey]: false,
    [errorKey]: '',
  };
};
const handleFinishCreatingEntity = state => handleFinishAction(state, CREATE_KEY_SET);
const handleFinishFetching = state => handleFinishAction(state, FETCH_KEY_SET);
const handleFinishUpdatingEntity = state => handleFinishAction(state, UPDATE_KEY_SET);
const handleFinishDeleteEntity = state => handleFinishAction(state, DELETE_KEY_SET);

const handleFinishFetchingEntityCollection = (state, action) => {
  const { data: { ids, entities } } = action;
  const hasData = ids.length > 0;
  const s = handleFinishFetching(state);

  return handleFinishFetching({
    ...s,
    entities,
    ids,
    hasData,
  });
};

const handleStoreEntityCollection = (state, action) => {
  const { data: { ids, entities } } = action;
  return {
    ...state,
    [IDS]: ids,
    [ENTITIES]: entities,
  };
};

const handleStoreEntity = (state, action) => {
  const { data: { id, entity } } = action;
  const newIDs = state[IDS].slice() || [];
  newIDs.push(id);

  return {
    ...state,
    [IDS]: [...new Set(newIDs)],
    [ENTITIES]: {
      ...state[ENTITIES],
      ...{ [id]: entity },
    },
    [FOCUSING]: id,
    [HAS_DATA]: true,
  };
};

const handleRemoveEntity = (state, action) => {
  const { data: { id } } = action;
  const newIDs = (state[IDS] || []).slice().filter(v => v !== id);
  const entities = state[ENTITIES];
  delete entities[id];

  return {
    ...state,
    [IDS]: [...new Set(newIDs)],
    [ENTITIES]: entities,
    [FOCUSING]: (state[FOCUSING] === id) ? '' : state[FOCUSING],
    [HAS_DATA]: newIDs.length > 0,
  };
};

const doForAllStore = (state, action, handler) => {
  const stores = state[STORES] || {};
  let result = handler(state, action);
  Object.keys(stores).forEach(() => {
    result = handler(result, action);
  });
  return result;
};

const handleSetFilters = (state, action) => {
  const { filters } = action;
  return {
    ...state,
    [FILTERS]: {
      ...state[FILTERS],
      ...filters
    }
  };
};

const userRoleReducer = (
  state = {
    ...INITIAL_STATE,
    [STORES]: {},
  },
  action
) => {
  let storeKey = '';
  if (action) {
    storeKey = action.storeKey;
  }
  switch (action.type) {
    // CREATE
    case START_CREATING_USER_ROLE:
      return handleStartCreateEntity(state);
    case STOP_CREATING_USER_ROLE:
      return handleStopCreatingEntity(state);
    case FAIL_CREATING_USER_ROLE:
      return handleFailCreatingEntity(state, action);
    case FINISH_CREATING_USER_ROLE:
      return handleFinishCreatingEntity(handleStoreEntity(state, action));

    // FETCH (RETRIEVE)
    case START_FETCHING_USER_ROLE:
      return withStoreKey(state, storeKey, action, handleStartFetchEntity);
    case START_FETCHING_USER_ROLE_COLLECTION:
      return withStoreKey(state, storeKey, action, handleStartFetchEntityCollection);

    case STOP_FETCHING_USER_ROLE:
    case STOP_FETCHING_USER_ROLE_COLLECTION:
      return withStoreKey(state, storeKey, action, handleStopFetchingEntity);

    case FAIL_FETCHING_USER_ROLE:
    case FAIL_FETCHING_USER_ROLE_COLLECTION:
      return withStoreKey(state, storeKey, action, handleFailFetchingEntity);

    case FINISH_FETCHING_USER_ROLE:
      return withStoreKey(state, storeKey, action, handleStoreEntity);
    case FINISH_FETCHING_USER_ROLE_COLLECTION:
      return withStoreKey(state, storeKey, action, handleFinishFetchingEntityCollection);

    // UPDATE
    case START_UPDATING_USER_ROLE:
      return handleStartUpdateEntity(state, action);
    case STOP_UPDATING_USER_ROLE:
      return handleStopUpdatingEntity(state, action);
    case FAIL_UPDATING_USER_ROLE:
      return handleFailUpdatingEntity(state, action);
    case FINISH_UPDATING_USER_ROLE:
      return handleFinishUpdatingEntity(doForAllStore(state, action, handleStoreEntity));

    case START_DELETING_USER_ROLE:
      return handleStartDeleteEntity(state, action);
    case STOP_DELETING_USER_ROLE:
      return handleStopDeleteEntity(state, action);
    case FAIL_DELETING_USER_ROLE:
      return handleFailDeleteEntity(state, action);
    case FINISH_DELETING_USER_ROLE:
      return handleFinishDeleteEntity(doForAllStore(state, action, handleRemoveEntity));

      /**
       * not necessary for this demo
     case START_UPDATING_USER_ROLE_COLLECTION:
     return handleStartUpdateEntity(state, action);
     case STOP_UPDATING_USER_ROLE_COLLECTION:
     return handleStopUpdatingEntity(state, action);
     case FAIL_UPDATING_USER_ROLE_COLLECTION:
     return handleFailUpdatingEntity(state, action);
     case FINISH_UPDATING_USER_ROLE_COLLECTION:
     return handleFinishUpdatingEntity(handleStoreEntityCollection(state, action));
     * */

    case FILTER_USER_ROLE:
      return handleSetFilters(state, action);

    default:
      return state;
  }
};

export default userRoleReducer;
