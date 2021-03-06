const router = require('express').Router()
const Post = require('./post_module')
const {errorHandler} = require('../users/users_helper')
const axios = require('axios')



// get all  posts
router.get('/', (req, res) => {
    Post.find()
    .then(posts => res.status(200).json({data: posts}))
    .catch(error =>  errorHandler(error, res))
})

// get a post by it's ID
router.get('/:id', (req, res) => {
    const {id} = req.params
    Post.findById(id)
    .then(post => res.status(200).json({data: post}))
    .catch(error =>  errorHandler(error, res))
})



//add a post 
router.post('/', (req, res) => {
    const newPost = req.body
    Post.add(newPost)
    .then(post => res.status(201).json({data: post}))
    .catch(error =>  errorHandler(error, res))
})

// update post information
router.put('/:id', (req, res) => {
    const updatingPost = req.body
    const {id} = req.params
    Post.update(updatingPost, id)
    .then(post => res.status(202).json({data: post}))
    .catch(error =>  errorHandler(error, res))
})

// remove a post 
router.delete('/:id', (req, res) => {
    const {id} = req.params
    Post.remove(id)
    .then((number) => res.status(200).json({data: {deleteMessage: `you have deleted ${number} Post/Posts`}}))
    .catch(error =>  errorHandler(error, res))
} )


//DS predictions
router.post('/prediction', (req, res) => {
    const DSPost = req.body
  
    axios
      .post('https://reddit-post-prediction.herokuapp.com/predict', DSPost)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => {
        res.status(500).json({ message: 'Error Fetching Jokes', error: err });
      });
  });



module.exports = router