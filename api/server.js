const express = require('express')
const cors = require('cors')
const helmet = require('helmet')


const server = express()



server.use(helmet())
server.use(express.json())
server.use(cors())

// server.us routers 

// to test that the server is up and running
server.get('/', (req, res) => {
    res.status(200).send(`<h1> Server is Up and Running </h1>`)
})

module.exports = server