const router = require('express').Router()
const User = require('./user_moduel')
const {hashing, errorHandler} = require('./users_helper')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

//get all users
router.get('/', (req, res) => {
    User.find()
    .then(allUsers => res.status(200).json({data: allUsers}))
    .catch(error =>  errorHandler(error, res))
})

// get user by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    User.findById(id)
    .then(user => res.status(200).json({data: user}))
    .catch(error =>  errorHandler(error, res))
})

// remove user from the databse
router.delete('/:id', (req, res) => {
    const {id} = req.params
    User.remove(id)
    .then(number => res.status(204).json({data: {deleteMessage: `you have deleted ${number} User/Users`}}))
    .catch(error =>  errorHandler(error, res))
})

// updating user's information
router.put('/:id', (req, res) => {
    const {id} = req.params
    const userInfo = req.body
    User.update(userInfo, id)
    .then(something => res.status(202).json({data: something}))
    .catch(error =>  errorHandler(error, res))
})

// register a new user to the user table
router.post('/register', (req, res) => {
    let userInfo = req.body
    const hashedPassword = hashing(userInfo.password)
    userInfo.password = hashedPassword
    User.add(userInfo)
    .then(user => {
        const token = makeJwt(user)
        res.status(201).json({data: user, token})
    })
    .catch(error =>  errorHandler(error, res))
})

// login into an existing user 
router.post('/login', (req, res) => {
    const {username, password} = req.body
    User.findBy({username})
    .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
            const token = makeJwt(user);

            res.status(201).json({ token });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    })
    .catch(error =>  errorHandler(error, res))
})





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

module.exports = router