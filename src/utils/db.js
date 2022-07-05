const mongoose = require('mongoose')
const { DB_URI } = require('./config')

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log('Connected to database Successfully!')
  } catch(err) {
    console.log(err)
    process.exit(0)
  }
}

module.exports = connectToDatabase