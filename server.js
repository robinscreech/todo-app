/* jslint node: true */
'use strict'

var express = require('express')

var morgan = require('morgan')

var path = require('path')

var app = express()

var mongoose = require('mongoose')

var bodyParser = require('body-parser')

// require conf in the app/config.js
var config = require('./app/Config')

//connect to mongo
mongoose.connect(config.DB)

// send the files from public path
app.use(express.static(path.join(__dirname, '/public')))

// use morgan to log request in dev mode
app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

var port = config.APP_PORT || 4000

app.listen(port)

console.log('App is listening on port ' + port)

var todoRoutes = require('./app/Routes')

//use routes set in Route.js and prefix with api

app.use('/api', todoRoutes)

app.use(function (req, res, next){
	//allow website to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost' + port)

	//request methods you want to allow
	res.setHeader('Access_Control_Allow_Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

	//request heads to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')

	// pass onto the next layer of middelware
	next()
})

//server index.html page when root is req'd
app.get('./', function(req, res, next){
	res.sendfile('./public/index.html')
})
