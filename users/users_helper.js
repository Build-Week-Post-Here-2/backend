const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenSecret = process.env.JWT_SECRET || "is it secret, is it safe?"
module.exports = {
    hashing,
    errorHandler,
    makeJwt,
    restricted
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
        jwtSecret: tokenSecret,
    };
    const options = {
        expiresIn: "8 hours",
    };
  
    return jwt.sign(payload, config.jwtSecret, options);
  }


   function restricted (req, res, next){
    const token = req.headers.authorization;
    const secret = tokenSecret;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "Not Allowed" });
            } else {
                req.jwt = decodedToken;

                next();
            }
        });
    } else {
        res.status(401).json({ message: "No token!" });
    }
}