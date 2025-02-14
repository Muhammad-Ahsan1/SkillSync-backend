const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    enum: ['ADMIN'],
    required: true,
  },
});


module.exports = mongoose.model("Admin", adminSchema);
