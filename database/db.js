const mongoose = require('mongoose')

try {
  mongoose.connect('mongodb+srv://baseprueba:baseprueba@cluster0.ygngaqu.mongodb.net/Cluster0?retryWrites=true&w=majority')
} catch (error) {
  console.log(error)
}