export const users = [
  {
    id: 1,
    email: 'admin@mail.com',
    password: '123',
    name: 'Admin',
    role: 'admin',
    permissions: [
      'dashboard:access',

      'users:access',
      'users:add',
      'users:edit',
      'users:delete',

      'settings:access',
    ],
  },
  {
    id: 2,
    email: 'editor@mail.com',
    password: '123',
    name: 'Editor',
    role: 'editor',
    permissions: ['dashboard:access', 'users:access', 'users:edit'],
  },
  {
    id: 3,
    email: 'guest@mail.com',
    password: '123',
    name: 'Guest',
    role: 'guest',
    permissions: ['dashboard:access'],
  },
];
