import { getUserRoles, postUserRole, getUserRole, deleteUserRole, updateUserRole } from './db';

describe('db', () => {
  describe('getUserRoles', () => {
    it('should get all user roles', () => {
      const userRoles = getUserRoles();
      expect(userRoles.data.ids).toEqual(['1', '2', '3', '4', '5', '6']);
    });
  });
  describe('getUserRole', () => {
    it('should get user role of the id', () => {
      const userRole = getUserRole(2);
      expect(userRole).toEqual({
        data: {
          active: true,
          created_on: '2019-01-18T18:25:43.511Z',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
          editable: false,
          id: 2,
          modified_on: '2019-01-18T18:25:43.511Z',
          name: 'Company Admin',
          type: 'admin',
          users: [{ first_name: 'Doug', id: 5, last_name: 'Tutt', photo_url: 'http://placekitten.com/60/60' }]
        }
      });
    });
  });
  describe('postUserRole and deleteUserRole', () => {
    it('should create entity', () => {
      postUserRole({
        name: 'aaa',
        users: [1, 2],
      });
      postUserRole({
        name: 'bbb',
        users: [3, 4],
      });
      const userRoles = getUserRoles();
      expect(userRoles.data.ids).toEqual(['1', '2', '3', '4', '5', '6', '7', '8']);
      const result = getUserRole(8).data;
      delete result.created_on;
      expect(result).toEqual({
        active: true,
        users: [
          {
            first_name: 'Nathan',
            id: 3,
            last_name: 'Norman',
            photo_url: 'http://placekitten.com/60/60'
          },
          {
            first_name: 'Ron',
            id: 4,
            last_name: 'Mitchell',
            photo_url: 'http://placekitten.com/60/60'
          }],
        description: 'default description',
        editable: true,
        id: 8,
        name: 'bbb',
        type: 'job_admin',
      });
      deleteUserRole(5);
      const urs = getUserRoles();
      expect(urs.data.ids).toEqual(['1', '2', '3', '4', '6', '7', '8']);
    });
  });

  describe('updateUserRole', () => {
    it('can update', () => {
      updateUserRole({
        id: 3,
        name: 'ccc',
      });
      expect(getUserRole(3).data.name).toEqual('ccc');
    });
  });
});

