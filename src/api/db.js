import moment from 'moment';

const db = {
  id: 6,
  user_roles: {
    1: {
      id: 1,
      name: 'Super Admin',
      type: 'admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      editable: false,
      active: true,
      users: [
        {
          id: 1,
          first_name: 'Jason',
          last_name: 'Mossburg',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 2,
          first_name: 'Bill',
          last_name: 'Hayes',
          photo_url: 'http://placekitten.com/60/60'
        }
      ],
      created_on: '2019-01-18T18:25:43.511Z',
      modified_on: '2019-01-18T18:25:43.511Z'
    },
    2: {
      id: 2,
      name: 'Company Admin',
      type: 'admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      editable: false,
      active: true,
      users: [
        {
          id: 5,
          first_name: 'Doug',
          last_name: 'Tutt',
          photo_url: 'http://placekitten.com/60/60'
        }
      ],
      created_on: '2019-01-18T18:25:43.511Z',
      modified_on: '2019-01-18T18:25:43.511Z'
    },
    3: {
      id: 3,
      name: 'Property Admin',
      type: 'admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      editable: false,
      active: false,
      users: [
        {
          id: 6,
          first_name: 'Sarah',
          last_name: 'Jane',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 7,
          first_name: 'Adrian',
          last_name: 'Davis',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 8,
          first_name: 'Conrad',
          last_name: 'Nguyen',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 9,
          first_name: 'Kevin',
          last_name: 'McSweeney',
          photo_url: 'http://placekitten.com/60/60'
        }
      ],
      created_on: '2019-01-18T18:25:43.511Z',
      modified_on: '2019-01-18T18:25:43.511Z'
    },
    4: {
      id: 4,
      name: 'Job Recruiter',
      type: 'job_admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      editable: true,
      active: true,
      users: [
        {
          id: 2,
          first_name: 'Bill',
          last_name: 'Hayes',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 4,
          first_name: 'Ron',
          last_name: 'Mitchell',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 6,
          first_name: 'Sarah',
          last_name: 'Jane',
          photo_url: 'http://placekitten.com/60/60'
        }
      ],
      created_on: '2019-01-18T18:25:43.511Z',
      modified_on: '2019-01-18T18:25:43.511Z'
    },
    5: {
      id: 5,
      name: 'Content Administrator',
      type: 'admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      editable: true,
      active: true,
      users: [
        {
          id: 1,
          first_name: 'Jason',
          last_name: 'Mossburg',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 3,
          first_name: 'Nathan',
          last_name: 'Norman',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 5,
          first_name: 'Doug',
          last_name: 'Tutt',
          photo_url: 'http://placekitten.com/60/60'
        }
      ],
      created_on: '2019-01-18T18:25:43.511Z',
      modified_on: '2019-01-18T18:25:43.511Z'
    },
    6: {
      id: 6,
      name: 'Property Moderator',
      type: 'admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      editable: false,
      active: true,
      users: [
        {
          id: 7,
          first_name: 'Adrian',
          last_name: 'Davis',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 8,
          first_name: 'Conrad',
          last_name: 'Nguyen',
          photo_url: 'http://placekitten.com/60/60'
        },
        {
          id: 9,
          first_name: 'Kevin',
          last_name: 'McSweeney',
          photo_url: 'http://placekitten.com/60/60'
        }
      ],
      created_on: '2019-01-18T18:25:43.511Z',
      modified_on: '2019-01-18T18:25:43.511Z'
    }
  },
  users: {
    1: {
      id: 1,
      first_name: 'Jason',
      last_name: 'Mossburg',
      photo_url: 'http://placekitten.com/60/60'
    },
    2: {
      id: 2,
      first_name: 'Bill',
      last_name: 'Hayes',
      photo_url: 'http://placekitten.com/60/60'
    },
    3: {
      id: 3,
      first_name: 'Nathan',
      last_name: 'Norman',
      photo_url: 'http://placekitten.com/60/60'
    },
    4: {
      id: 4,
      first_name: 'Ron',
      last_name: 'Mitchell',
      photo_url: 'http://placekitten.com/60/60'
    },
    5: {
      id: 5,
      first_name: 'Doug',
      last_name: 'Tutt',
      photo_url: 'http://placekitten.com/60/60'
    },
    6: {
      id: 6,
      first_name: 'Sarah',
      last_name: 'Jane',
      photo_url: 'http://placekitten.com/60/60'
    },
    7: {
      id: 7,
      first_name: 'Adrian',
      last_name: 'Davis',
      photo_url: 'http://placekitten.com/60/60'
    },
    8: {
      id: 8,
      first_name: 'Conrad',
      last_name: 'Nguyen',
      photo_url: 'http://placekitten.com/60/60'
    },
    9: {
      id: 9,
      first_name: 'Kevin',
      last_name: 'McSweeney',
      photo_url: 'http://placekitten.com/60/60'
    }
  }
};

// for ease of manual testing
window.db = db;

export const postUserRole = (payload) => {
  const {
    name,
    type,
    description,
    editable,
    active,
    users
  } = payload;
  const builtUsers = (users || []).map(
    u => db.users[u]
  );
  db.id += 1;
  const result = {
    id: db.id,
    name: name || 'default',
    type: type || 'job_admin',
    description: description || 'default description',
    editable: (editable === undefined) ? true : editable,
    active: (active === undefined) ? true : active,
    users: builtUsers,
    created_on: moment().format('YYYY-MM-DDTkk:mm:ss Z'),
  };
  db.user_roles[db.id] = result;

  return { data: { id: result.id, entity: result } };
};

export const getUserRoles = () => ({
  data: {
    ids: Object.keys(db.user_roles),
    entities: db.user_roles,
  }
});

export const getUserRole = id => ({
  data: { ...db.user_roles[id] }
});

export const deleteUserRole = (id) => {
  const urs = db.user_roles;
  delete urs[id];
  db.user_roles = urs;
  return { data: { id } };
};

export const updateUserRole = (payload) => {
  const { id } = payload;
  const ur = db.user_roles[id];
  const result = {
    ...ur,
    ...payload,
  };

  db.user_roles = {
    ...db.user_roles,
    ...{ [id]: result },
  };

  return { data: { id, entity: result } };
};
