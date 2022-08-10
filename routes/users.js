const express = require('express')
const router = express.Router()

const { getUsers, createUsers, deleteUser, updateUser, updateAllUser } = require('../controller/users')

router
  .get('/get', getUsers )
  .post('/user' , createUsers )
  .delete('/delete', deleteUser)
  .patch('/patch', updateUser )
  .put('/put', updateAllUser)

  module.exports = router