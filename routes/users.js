const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

// Get all users
router.get('/', (req, res) => {
  res.json(usersData);
})

// Get user by id
router.get('/:id', (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json(usersData.find(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
})

// Create new user
router.post('/', (req, res) => {
  req.body = sampleUser;
  sampleUser.id = usersData.length + 1;

  usersData.push(sampleUser);

  res.json({ newUser: req.body });
})

// Update one user
router.put('/:id', (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    req.body = sampleUser;

    usersData.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name = sampleUser.name ? sampleUser.name : user.name;
        user.username = sampleUser.username ? sampleUser.username : user.username; 
        user.email = sampleUser.email ? sampleUser.email : user.email;
        user.address = sampleUser.address ? sampleUser.address : user.address;
        user.phone = sampleUser.phone ? sampleUser.phone : user.phone;
        user.website = sampleUser.website ? sampleUser.website : user.website;
        user.company = sampleUser.company ? sampleUser.company : user.company;

        res.json({ msg: 'User updated', user });
      }
    }) 
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
})

// Delete user by id
router.delete('/:id', (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json({ 
      msg: `User ${req.params.id} deleted`, 
      users: usersData.filter(user => user.id !== parseInt(req.params.id)) 
    });
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
})

module.exports = router;