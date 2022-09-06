const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})

const environment = {
    port: 12345,
    dbUri: process.env.MONGODB_DB_URI ?? ''
}

  export default environment