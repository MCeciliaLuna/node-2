require('dotenv').config()
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY

 
 const getUsers = async(req,res) => { //OBTENER USUARIOS
  const users = await User.find({})

  console.log(users)
  res.json({
    message: 'Usuarios obtenidos exitosamente',
    users
  })
 }

  const createUsers = async(req,res) => { //CREAR USUARIO
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

    const deleteUser = async(req,res) => { //ELIMINAR USUARIO
      const { id, accessToken } = req.body

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

    const updateUser = async(req,res) => { //CAMBIAR UNA SOLA CARACTERISTICA DE USUARIO
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

const updateAllUser = async(req,res) => { // CAMBIAR TODO EL USUARIO
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

const login = async(req,res) => { //LOGIN
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
    const result = bcrypt.compareSync(password, user.password)

    if (result) {
      const token = jwt.sign({ user }, secretKey)

      res.json({
        message: "usuario logueado exitosamente",
        result,
        token
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