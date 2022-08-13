const User = require('../models/users');
const bcrypt = require('bcrypt');

 
 const getUsers = async(req,res) => {
  const users = await User.find({})

  console.log(users)
  res.json({
    message: 'Usuarios obtenidos exitosamente',
    users
  })
 }

  const createUsers = async(req,res) => {
    const { nombre, dni, edad, email, password} = req.body

    const saltRound = 15;

  const passEncrypted = bcrypt.hashSync(password, saltRound );
  

    try {
      const newUser = new User({
        nombre,
        dni,
        edad,
        email,
        password : passEncrypted,
      })
  
      await newUser.save()
  
       res.json({
         message: `Usuario ${nombre} creado exitosamente`,
        })
    } catch (error) {
      console.error(error)
    }
    
    }

    const deleteUser = async(req,res) => {
      const { id } = req.body

      try {
        await User.findOneAndDelete(id)
        
        console.log(id)
        res.json({
          "message": `Usuario ${id} eliminado`
        })
      } catch (error) {
        console.error(error)
      }

      
    }

    const updateUser = async(req,res) => {
        const { id, nuevoNombre } = req.body
    
        try {
    
          const userUpdated = await User.findByIdAndUpdate(id, {nombre: nuevoNombre})
      
          res.json({
            message: "usuario modificado exitosamente",
            userUpdated
          })
    
        } catch (error) {
         console.error(error) 
        }
    
      }

const updateAllUser = async(req,res) => {
  const { id, nombre, dni, edad, email } = req.body

  try {
    const userUpdated = await User.findByIdAndUpdate(id, {
      nombre,
      dni,
      edad,
      email
    })

    res.json({
      message: "usuario modificado exitosamente",
      userUpdated
    })
  } catch (error) {
    console.error(error)
  }
}

const login = async(req,res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
    const result = bcrypt.compareSync(password, user.password)

    if (result) {
      res.json({
        message: "usuario logueado exitosamente",
        result
      }) 
    } else {
      res.json({
        message: "usuario o contraseña incorrecta"
      })
    }
  
  } catch (error) {
    console.error(error)
  }

  
}

 module.exports = { getUsers, createUsers, deleteUser, updateUser, updateAllUser, login }