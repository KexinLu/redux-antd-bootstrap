import { schema } from 'normalizr';

export const userRole = new schema.Entity('user_role');
export const userRoleArray = new schema.Array(userRole);
