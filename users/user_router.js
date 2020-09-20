const router = require('express').Router()
const User = require('./user_moduel')
const Post =require('../posts/post_module')
const {hashing, errorHandler, makeJwt} = require('./users_helper')
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
    .then(number => res.status(200).json({data: {deleteMessage: `you have deleted ${number} User/Users`}}))
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

// get all the postes that are related to a user
router.get('/:id/posts', (req, res) => {
    const {id} = req.params
    User.findById(id)
    .then(user => {
        Post.findBy({user_id: id})
       
        .then(posts => {
            const userPosts = {user, posts}
            res.status(200).json({data: userPosts})
        })
    })
    .catch(error =>  errorHandler(error, res))
})







module.exports = router