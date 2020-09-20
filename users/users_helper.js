const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {
    hashing,
    errorHandler,
    makeJwt
}

// hashing function
function hashing (password) {
    const rounds = process.env.BCRYPT_ROUNDS || 4;
    const hashed = bcryptjs.hashSync(password, rounds)
    return hashed
}

// api erorr handler
function errorHandler(error, res) {
    res.status(500).json({errorMessage: error.message})
}

// token creater function
function makeJwt({ id, username}) {
    const payload = {
        username,
         id
    };
    const config = {
        jwtSecret: process.env.JWT_SECRET || "is it secret, is it safe?",
    };
    const options = {
        expiresIn: "8 hours",
    };
  
    return jwt.sign(payload, config.jwtSecret, options);
  }