const User = require('../models/users')
 
 const getUsers = async(req,res) => {
  res.send('Recibió la data del controlador')
 }

  const createUsers = async(req,res) => {
    const { nombre, dni, edad, email } = req.body

    try {
      const newUser = new User({
        nombre,
        dni,
        edad,
        email,
      })
  
      await newUser.save()
  
       res.json({
         message:"Usuario creado exitosamente",
        })
    } catch (error) {
      console.error(error)
    }
    
    }

    const deleteUser = (req,res) => {
      const { id } = req.params

      console.log(id)
      res.json({
        "message": `Usuario ${id} eliminado`
      })
    }

 module.exports = { getUsers, createUsers, deleteUser }