const mongoose = require('mongoose');

const connectDB = (URI) => {
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
};

module.exports = connectDB;
