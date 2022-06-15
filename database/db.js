const mongoose = require('mongoose')

try {
  mongoose.connect('mongodb+srv://MCeciliaLuna:Cecilia1234@cluster0.o1phzs9.mongodb.net/?retryWrites=true&w=majority')
} catch (error) {
  console.log(error)
}

mongoose()