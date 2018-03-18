const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

// runs our app through our routes and setup with just an object for DB later
require('./api/index')(app, {})

// add middlewares
app.use(bodyParser.urlencoded({ extended: true }))

// setup routes for api and for static files
// app.use('/', express.static(path.join(__dirname, '../public')))

// instantiate listener
app.listen(port, () => { console.log('Live on port: ', port) })
