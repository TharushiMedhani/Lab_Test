const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
  description:{
    type:String,
    required:true,
  },

  category:{
    type:String,
    required:true,
    enum: ['Electronics', 'Clothing', 'Food', 'Other']
  }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
