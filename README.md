# Capstone Project - Travel App

## Table of Contents

* [Overview](#overview)
* [Project Environment Setup](#project)
* [UI](#ui)
* [APIs](#api)
* [Tasks](#tasks)

## Overview

Capstone Project - Travel App - This project is web app that obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. 
 * Additional functionality and customization to follow*

## Project Environment Setup
Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with .html, .css, and .js files.

#### Webpack
Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.

#### Cors
The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

#### Body-parser
The body-parser package should be installed and included in the project.

#### Jest
Tests.

#### Service workers
To be implemented at the end of the project. Allows the app to run when the server is not running.

##### Local storage
Persist data so user can return to the site and see their saved trip

## UI
The project will include a simple form where you enter the location you are traveling to and the date you are leaving. The app will save the trip and display a countdown and the weather forcast for location travelling to as well as an image of the location.

#### Input form
A form is present for a user to add trip location and date information

#### Saved trip
Displays the location of the saved trip.

#### Countdown
Displays how many days until the trip.

#### Weather
If the saved trip is within a week, display the current weather forecast
If the saved trip is more than a week away, display predicted forecast.

#### Image
Displays an image of the location the user has saved.

## APIs

#### Geonames API
Returns coordinates for a location.

#### Dark Sky API
Weather API - takes coordinates returned by Geonames Api

#### Pixabay API
Image API - for displaying image of location user will be travelling to

## Dynamic UI

The UI is updated when the user adds or deletes trips, updates the weather and countdown as the trip gets closer.

## Tasks

This is a list of tasks to complete the project

#### Functionality
- [x] Set up readme file
- [x] Do initial git commit
- [x] Create initial file structure
- [x] Install Node and Express on local machine
- [x] The project file server.js should require express(), and should create an instance of their app using express.
- [x] The Express app instance should be pointed to the project folder with .html, .css, and .js files.
- [x] The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
- [x] The body-parser package should be installed and included in the project.
- [x] Local server should be running and producing feedback to the Command Line through a working callback function.
- [x] Create API credentials on Geonames.org
- [x] Replace the openweather api with geonames api
- [x] There should be an asynchronous function to fetch the data from the app endpoint
- [x] You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
- [x] The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
- [x] The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.


#### Requirements
 - [ ] Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.
 - [ ] There should be at least one test for the express server and application javascript
- [ ] The project must have service workers installed.
- [ ] All features are usable across modern desktop, tablet, and phone browsers.
- [ ] Styling is set up in a logical way. All interactive elements have hover states.
- [ ] HTML structure should be indented properly with classes and ID’s that make sense.
- [ ] The design should clearly be different from the design used in projects 3 and 4.
- [ ] Server (src > server > server.js) should be a near duplication of project 3 with the exception of additional added member: value pairs.
- [ ] (src > client > index.js) At least one function should be imported.
- [ ] (src > client > index.js) At least one event listener should be imported.
- [ ] (src > client > index.js) (styles referenced in html/css)
- [ ] (src > client > js > app.js) There should be URLS and API Keys for at least 3 APIs, including Geonames, Dark Sky, and Pixabay. You can feel free to use more than 3 APIs.
- [ ] (src > client > js > app.js) There should be a primary object with placeholder member value pairs.
- [ ] (src > client > js > app.js) There should be a primary function that is exported to index.js.
- [ ] At least one option from the Extend your Project/Ways to Stand Out sections have been added. Please add a Note to your reviewer which one you chose to implement, or add into your README.
- [ ] A README file is included detailing the app and all dependencies. The Readme file should have non-default text in it that is specific to this project. It doesn’t have to be thorough, but should have some basic info. Bonus points if correct markdown is used.
- [ ] Comments are present and effectively explain longer code procedure when necessary.
- [ ] Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.
- [ ] Extend app: At least one of these is required, but the rest are great additional ways to further customize and improve your project!

#### Bugs
- [ ] Trip date is entering 1 day off and calculating 2 days off

* Add end date and display length of trip.
* Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
* Allow user to add multiple destinations on the same trip.
* Pull in weather for additional locations.
* Allow the user to add hotel and/or flight data.
* Multiple places to stay? Multiple flights?
* Integrate the REST Countries API to pull in data for the country being visited.
* Allow the user to remove the trip.
* Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
* Instead of just pulling a single day forecast, pull the forecast for multiple days.
* Incorporate icons into forecast.
* Allow user to Print their trip and/or export to PDF.
* Allow the user to add a todo list and/or packing list for their trip.
* Allow the user to add additional trips (this may take some heavy reworking, but is worth the challenge).
* Automatically sort additional trips by countdown.
* Move expired trips to bottom/have their style change so it’s clear it’s expired.

