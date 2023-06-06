const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFood: [String],
});

///creating a new model
/// "Person" is the name of collection u'll see in the db basically points to personShema
module.exports = mongoose.model("Person", personSchema);
