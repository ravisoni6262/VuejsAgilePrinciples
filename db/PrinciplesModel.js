require('./Connection');
const Mongoose = require('mongoose');
 
const principles = new Mongoose.Schema({
    _id: Mongoose.Schema.Types.ObjectId,
    pid: Number,
    principle: String
});
 
const PrincipleModel = Mongoose.model("Principles", principles);
 
module.exports = PrincipleModel;
