const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
   
 firstName:{
  type: String,
  required: true,
},

lastName: {
 type: String,
 required: true,

},
 
age: {
 type: Number,
 required: true,
 maxlength: 120,
 minlength: 1,
},

createdOn: {
  type: Date,
  default: Date.now,
 }
});

const friendsModel = mongoose.model('Friend', friendSchema);

module.exports = friendsModel;