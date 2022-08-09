const express = require('express')
const router = express.Router()

const { getUsers, createUsers, deleteUser } = require('../controller/users')

router
  .get('/', getUsers )
  .post('/' , createUsers )
  .delete('/:id', deleteUser)

  module.exports = router