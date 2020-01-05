// import { weather } from './weather';

// Load environment variables
const dotenv = require('dotenv')
dotenv.config()

// JS Object for route endpoints
// projectData = {}
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

// Set up http
const http = require('http')

// GET route for geonames
app.get('/geonames', function (req, res) {

    var city = res.body
    // var city = "Portland, OR" //TEMP VAR!!!!!!!

    const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${process.env.GEONAMES_API_USR}`

    console.log('url: ', url)

    http.get(url, (resp) => {

        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        resp.on('end', () => {
            var dataObj = JSON.parse(data)
            // console.log("dataObj: ", dataObj)
            const myResData = {
                lat: dataObj.geonames[0].lat, 
                long: dataObj.geonames[0].lng, 
                country: dataObj.geonames[0].countryCode}
            console.log("resData: ", myResData)
            
            res.send(JSON.stringify(myResData))
        })
    }).on("error", (err) => {
        console.log("Error: " + err.message)
    })
})


// Set up https
const https = require('https')

// GET route for weather
app.get('/weather', function (req, res) {
    // const latLon
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/42.3601,-71.0589`
    // console.log('url: ', url)

    https.get(url, (resp) => {

        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        resp.on('end', () => {
            var dataObj = JSON.parse(data)
            console.log("dataObj: ", dataObj)
            console.log("temp: ", dataObj.currently.temperature)
            console.log("sum: ", dataObj.hourly.summary)
            res.send(JSON.stringify({temp: dataObj.currently.temperature, summary: dataObj.hourly.summary}))
        })
    }).on("error", (err) => {
        console.log("Error: " + err.message)
    })
})


// GET route
// app.get('/all', function (req, res) {
//     res.send(projectData)
// })

// POST route
// app.post('/save', function (req, res) {
//     console.log(req.body)
//     projectData = req.body
//     res.end()
//     console.log('updateData:', projectData)
// })