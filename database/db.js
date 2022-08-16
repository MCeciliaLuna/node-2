require('dotenv').config()
const mongoose = require('mongoose');

const database = process.env.DB

const connectDb = async() => {
   try {
     mongoose.connect(database)
     console.log('Db conectada')
   } catch (error) {
     console.error(error)
   }
 }

 connectDb()