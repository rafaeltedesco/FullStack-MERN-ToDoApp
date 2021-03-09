const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: path.resolve(__dirname, '.env')})

exports.config = {
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL,
  MONGO_URI: process.env.MONGO_URI,
}