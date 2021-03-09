const mongoose = require('mongoose')

const {config} = require('./../../config/config')

const {MONGO_URI} = config

exports.dbConnection = async ()=> {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log(`Connected to db ${conn.connection.name}`)
  }
  catch(err) {
    console.log(err.message)
  }
}