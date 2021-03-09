const app = require('./app')
const {config} = require('./config/config')
const db = require('./src/database/db').dbConnection()

const {PORT, BASE_URL} = config 

app.listen(PORT, ()=> {
  console.log(`Server up and running on http://localhost:${PORT}${BASE_URL}`)
})