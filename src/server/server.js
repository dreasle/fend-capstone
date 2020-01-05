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

// // Set up http
// const http = require('http')

// // GET route for geonames
// app.get('/geonames', function (req, res) {

    // var city = res.body
    // // var city = "Portland, OR" //TEMP VAR!!!!!!!

// Set up node-fetch
const fetch = require("node-fetch")

// Return lat and long from city name
async function cityCoords(city) {    
    const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${process.env.GEONAMES_API_USR}`
    console.log('in cityCoords url: ', url)

    const getData = async url => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            // console.log("json: ", json)
            const myResData = {
                lat: json.geonames[0].lat, 
                long: json.geonames[0].lng, 
                country: json.geonames[0].countryCode}
            console.log(" in cityCoords resData: ", myResData)
            return myResData
            // return json
        } catch (error) {
            console.log(error)
        }
    }
    return getData(url)


    
      

    // http.get(url, (resp) => {
    //     let data = '';

    //     resp.on('data', (chunk) => {
    //       data += chunk;
    //     })
      
    //     resp.on('end', () => {
    //         var dataObj = JSON.parse(data)
    //         // console.log("dataObj: ", dataObj)
    //         const myResData = {
    //             lat: dataObj.geonames[0].lat, 
    //             long: dataObj.geonames[0].lng, 
    //             country: dataObj.geonames[0].countryCode}
    //         console.log(" in cityCoords resData: ", myResData)
    //         return myResData
    //     })
    // }).on("error", (err) => {
    //     console.log("Error: " + err.message)
    // })
}



// Return weather from lat and long coords
async function getWeather(coords) {
    const latLon = `${coords.lat},${coords.long}`
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${latLon}`
    console.log('in getWeather url: ', url)

    const getData = async url => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            // console.log("json: ", json)
            const myResData = {
                temp: json.currently.temperature,
                summary: json.hourly.summary}
            console.log(" in getWeather myResData: ", myResData)
            return myResData
            // return json
        } catch (error) {
            console.log(error)
        }
    }
    return getData(url)
}

// // Set up https
// const https = require('https')

// // GET route for weather
// app.get('/weather', function (req, res) {
//     // const latLon
//     const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/42.3601,-71.0589`
//     // console.log('url: ', url)

//     https.get(url, (resp) => {

//         let data = '';
//     // const res = httpGet
//     // return res
//     // return JSON.stringify(myResData)
// }

// async function return1() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('1'), 3000)
//     })
//     const res = await promise
//     return res
// }

async function return2(item) {
        console.log("ret2 item: ", item)
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('2'), 1000)
    })
    const res = await promise
    return `${item}, ${res}`
}

async function return3(item) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('3'), 2000)
    })
    const res = await promise
    return `${item}, ${res}`
}

// POST route for weather
app.post('/weather', async function (req, res) {

    const ret1 = await cityCoords("Portland, OR")
    const ret2 = await getWeather(ret1)
    // const ret3 = await return3(ret2)
    // res.send(`${ret3}, 4`)

    res.send(ret2)
})