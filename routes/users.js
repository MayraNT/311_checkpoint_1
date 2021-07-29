const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

// Get all users
router.get('/', usersController.listUsers)

// Get user by id
router.get('/:id', usersController.showUser)

// Create new user
router.post('/', usersController.createUser)

// Update one user
router.put('/:id', usersController.updateUser)

// Delete user by id
router.delete('/:id', usersController.deleteUser)

module.exports = router;