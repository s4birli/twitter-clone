const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})

const environment = {
    port: 12345,
    dbUri: `mongodb+srv://${process.env.MONGODB_USERNAME ?? ''}:${process.env.MONGODB_PASSWORD ?? ''}@${process.env.MONGODB_URL ?? ''}/${process.env.MONGODB_DB ?? ''}` ,
}

  export default environment