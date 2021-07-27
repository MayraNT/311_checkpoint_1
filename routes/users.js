const express = require('express')
const router = express.Router()

const usersData = require('../data/index')
const sampleUser = require('../data/sampleUser')

// Get all users
router.get('/users', (req, res) => {
  res.json(usersData);
})

// Get user by id
router.get('/users/:id', (req, res) => {
  const userFound = usersData.some(user => user.id === parseInt(req.params.id));

  if (userFound) {
    res.json(usersData.find(user => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No users found with id ${req.params.id}` })
  }
})

module.exports = router;