const mongoose = require('mongoose');

const connectDb = async() => {
   try {
     mongoose.connect('mongodb+srv://PruebaBE:PruebaBE@comision24i.5xhiyrc.mongodb.net/?retryWrites=true&w=majority')
     console.log('Db conectada')
   } catch (error) {
     console.error(error)
   }
 }

 connectDb()