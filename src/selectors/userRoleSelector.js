import { createSelector } from 'reselect';
import {
  ENTITIES,
  FILTERS,
  IDS,
  STORES,
  FETCH_KEY_SET,
} from 'reducers/userRoleReducer/userRoleReducer';

export const getUserRoleState = state => (state.entities.user_role);
const getEntityState = (state, props) => {
  const { storeKey } = props;
  if (storeKey == null || storeKey === undefined || storeKey === '') {
    return getUserRoleState(state);
  }
  return getUserRoleState(state)[STORES][storeKey];
};

export const isFetchingUserRole = createSelector(
  [getEntityState],
  state => state[FETCH_KEY_SET.actionKey],
);

export const userRoleEntities = createSelector(
  [getEntityState],
  state => state[ENTITIES]
);

export const userRoleEntityIDs = createSelector(
  [getEntityState],
  state => state[IDS]
);

export const userRoleEntitiesAsArray = createSelector(
  [userRoleEntities, userRoleEntityIDs],
  (entities, ids) => ids.map(id => entities[id])
);

export const getUserRoleFilters = createSelector(
  [getEntityState],
  (state) => {
    const result = state[FILTERS];
    return result;
  }
);

const filterByID = ({ entityArray, filters }) => {
  let result = entityArray;
  if (('ids' in filters) && filters.ids && filters.ids.length > 0) {
    const ids = filters.ids;
    result = entityArray.filter(e => ids.includes(e.id));
  }

  return { entityArray: result, filters };
};

const filterByState = ({ entityArray, filters }) => {
  let result = entityArray;
  if (('state' in filters) && filters.state && filters.state !== '' && filters.state !== 'both') {
    let targetState = true;
    if (filters.state === 'inactive') {
      targetState = false;
    }
    result = result.filter(e => e.active === targetState);
  }

  return { entityArray: result, filters };
};

export const userRolesVisibleEntityArray = createSelector(
  [userRoleEntitiesAsArray, getUserRoleFilters],
  (entityArray, filters) => {
    const filtered = filterByState(filterByID({ entityArray, filters }));
    return filtered.entityArray;
  }
);

export const userRolesVisibleEntityIDs = createSelector(
  [userRolesVisibleEntityArray],
  entityArray => entityArray.map(e => e.id)
);

export const userRoleNameOptions = createSelector(
  [userRoleEntitiesAsArray],
  vs => vs.reduce((prev, curr) => ({
    ...prev,
    [curr.name]: curr.id
  }), {})
);


/**
 *
 * NOT BEING USED FOR THIS CHALLENGE
export const isFetchingUserRoleFailed = createSelector(
  [getEntityState],
  state => state[FETCH_KEY_SET.failKey],
);

export const isCreatingUserRole = createSelector(
  [getEntityState],
  state => state[CREATE_KEY_SET.actionKey],
);

export const isCreatingUserRoleFailed = createSelector(
  [getEntityState],
  state => state[CREATE_KEY_SET.failKey],
);

export const isDeletingUserRole = createSelector(
  [getEntityState],
  state => state[DELETE_KEY_SET.actionKey],
);

export const isDeletingUserRoleFailed = createSelector(
  [getEntityState],
  state => state[DELETE_KEY_SET.failKey],
);

export const isUpdatingUserRole = createSelector(
  [getEntityState],
  state => state[UPDATE_KEY_SET.actionKey],
);

export const isUpdatingUserRoleFailed = createSelector(
  [getEntityState],
  state => state[UPDATE_KEY_SET.failKey],
);

export const userRoleHasData = createSelector(
  [getEntityState],
  state => state[HAS_DATA],
);

export const userRoleFetchingID = createSelector(
[getEntityState],
state => state[FETCHING_ID]
);

export const userRoleFocusing = createSelector(
[getEntityState],
state => state[FOCUSING]
);

export const userRoleFetchingFilters = createSelector(
[getEntityState],
state => state[FETCH_FILTERS]
);

export const userRoleOldFetchingFilters = createSelector(
[getEntityState],
state => state[OLD_FETCH_FILTERS]
);

 * */

