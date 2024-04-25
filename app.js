const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const qrCodeRoute = require('./controllers/qrCode')
const mongoose = require('mongoose')
const path = require('path')


mongoose.connect(config.MONGODB_URI).then(result => {
    logger.info(' Connect to DataBase')
}).catch(error => {
    logger.error('Failed connection', error)
})


// Config setup
app.use(express.json())
app.use(cors())
app.use('/api/qrcodes', qrCodeRoute)





module.exports = app
