const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  },
  numReviews: {
    type: Number,
  },
  countInStock: {
    type: Number,
  },
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', ProductSchema);
