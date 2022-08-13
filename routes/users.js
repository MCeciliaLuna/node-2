const express = require('express')
const router = express.Router()

const { getUsers, createUsers, deleteUser, updateUser, updateAllUser, login } = require('../controller/users')

router
  .get('/get', getUsers )
  .post('/user' , createUsers )
  .delete('/delete', deleteUser)
  .patch('/patch', updateUser )
  .put('/put', updateAllUser)

  .post('/login', login)

  module.exports = router