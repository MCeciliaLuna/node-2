require('dotenv').config()
const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY

console.log(secretKey)

const jwtValidator = async(req,res, next) => {
  const { accessToken } = req.body

  console.log(accessToken)

  try {
    const verify = jwt.verify(accessToken, secretKey)

    console.log(verify)

    if (verify) {
      return next()
    }

    return res.json({
      message: 'Token inválido'
    })
  } catch (error) {
    res.json({
      message: 'No autorizado '
    })
  }

  console.log(accessToken)

}

module.exports = { jwtValidator };