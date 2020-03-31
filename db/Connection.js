const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/agileprinciples', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
console.log('Connected to mongoDb');
module.exports.db=db




