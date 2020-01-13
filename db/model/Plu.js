const mongoose = require('mongoose');

const pluSchema = mongoose.Schema({
  name: String,
  description: String,
  plu: Number,
  category: String,
  sub_category: String
});

const Plu = mongoose.model('Plu', pluSchema);

module.exports = Plu;
