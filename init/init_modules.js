const express = require('express')
const App = express()
//set public directory
App.use(express.static('public'))
//Set view engine
App.set('view engine','ejs')
//use .env
require('dotenv').config()





module.exports = App