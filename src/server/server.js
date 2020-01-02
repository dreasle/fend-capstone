// Server javascript file

// Load environment variables
const dotenv = require('dotenv')
dotenv.config()

// JS Object for route endpoints
projectData = {}
// projectData = {date: '11/30/2019', temp: '30', content: 'I feel great'}

console.log('About to start server')

// Express to run server and routes
const express = require('express')

// Start up app instance
const app = express()

// Set up body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Set up cors
const cors = require('cors')
app.use(cors())

// Init main project folder
app.use(express.static('dist'))

// Set up default index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Spin up the server
var port = 8082
app.listen(port, function () {
    console.log(`Running on port: ${port}`)
})

// GET route
app.get('/all', function (req, res) {
    res.send(projectData)
})

// POST route
app.post('/save', function (req, res) {
    console.log(req.body)
    projectData = req.body
    res.end()
    console.log('updateData:', projectData)
})