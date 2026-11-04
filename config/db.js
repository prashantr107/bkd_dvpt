const mongoose = require('mongoose')



const connection = mongoose.connect('mongodb://127.0.0.1:27017/bkd_dvpt')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection failed:', error));


module.exports = connection