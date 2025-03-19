import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

const connection = mongoose.connection;

export default connection;