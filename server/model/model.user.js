const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email_address: {
    type: String,
    required: true,
    trim: true, 
    lowercase: true 
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  profile_img_url: {
    type: String,
    required: false
  }
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);

module.exports = User;