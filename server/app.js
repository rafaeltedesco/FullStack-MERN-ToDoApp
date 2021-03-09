const express = require('express')
const  cors = require('cors')

const tasksRouter = require('./src/routes/tasks.router')
const {errorHandler, throwError} = require('./src/middlewares/errorHandler')
const {config} = require('./config/config')


const app = express()
const {BASE_URL} = config

app.use(cors())
app.use(express.json())

app.use(BASE_URL, tasksRouter)
app.all('*', throwError)
app.use(errorHandler)


module.exports = app


