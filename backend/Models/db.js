const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

// Connect to MongoDB using Mongoose
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected....');
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });
