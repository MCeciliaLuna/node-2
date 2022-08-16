const express = require('express')
const router = express.Router()

const { getUsers, createUsers, deleteUser, updateUser, updateAllUser, login } = require('../controller/users')
const { jwtValidator } = require('../middlewares/jwtValidator')

router
  .get('/get', getUsers )
  .post('/user' , createUsers )
  .delete('/delete', jwtValidator, deleteUser)
  .patch('/patch', jwtValidator, updateUser )
  .put('/put', updateAllUser)

  .post('/login', login)

  module.exports = router