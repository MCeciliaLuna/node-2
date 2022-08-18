const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const user = new Schema ({
  nombre: String,
  dni: Number,
  edad: Number,
  email: String,
  password: String
})



module.exports = model('User', user) 