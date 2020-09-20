const bcryptjs = require('bcryptjs')

module.exports = {
    hashing,
    errorHandler
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