const usersData = require('../data/index');

// Get all users
const listUsers = (req, res) => {
  res.json(usersData);
}

// Get user by id
const showUser = (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json(usersData.find(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
}

// Create new user
const createUser = (req, res) => {
  let newUser = req.body;
  newUser.id = usersData.length + 1;

  usersData.push(newUser);

  res.json({ msg: 'New user created', newUser: req.body });
}

// Update one user
const updateUser = (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    let updatedUser = req.body;

    usersData.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updatedUser.name ? updatedUser.name : user.name;
        user.username = updatedUser.username ? updatedUser.username : user.username; 
        user.email = updatedUser.email ? updatedUser.email : user.email;
        user.address.street = updatedUser.address.street ? updatedUser.address.street : user.address.street;
        user.address.suite = updatedUser.address.suite ? updatedUser.address.suite : user.address.suite;
        user.address.city = updatedUser.address.city ? updatedUser.address.city : user.address.city;
        user.address.zipcode = updatedUser.address.zipcode ? updatedUser.address.zipcode : user.address.zipcode;
        user.address.geo = updatedUser.address.geo ? updatedUser.address.geo : user.address.geo;
        user.phone = updatedUser.phone ? updatedUser.phone : user.phone;
        user.website = updatedUser.website ? updatedUser.website : user.website;
        user.company.name = updatedUser.company.name ? updatedUser.company.name : user.company.name;
        user.company.catchPhrase = updatedUser.company.catchPhrase ? updatedUser.company.catchPhrase : user.company.catchPhrase;
        user.company.bs = updatedUser.company.bs ? updatedUser.company.bs : user.company.bs;

        res.json({ msg: 'User updated', user });
      }
    }) 
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
}

// Delete user by id
const deleteUser = (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json({ 
      msg: `User ${req.params.id} deleted`, 
      users: usersData.filter(user => user.id !== parseInt(req.params.id)) 
    });
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
}

module.exports = { 
  listUsers, 
  showUser, 
  createUser, 
  updateUser, 
  deleteUser 
}