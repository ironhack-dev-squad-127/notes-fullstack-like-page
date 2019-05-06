// server/models/Like.js

const mongoose = require('mongoose');

// Create a Like model with 2 fields
// - name (String that is required)
// - createdAt (Date automatically generated)
const likeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: null
    }
  });

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;