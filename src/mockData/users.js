// User
// - name
// - email
// - id

const users = [];

[...Array(20).keys()].forEach((key) => {
  users.push({
    id: key,
    name: `Test User ${key}`,
    email: `testuser${key}@gmail.com`,
  });
});

export default users;
