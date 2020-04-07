const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('./db/Connection');
const Principles = require('./db/PrinciplesModel');
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 
app.get('/', (_req,res,_next) => {
   Principles.find({})
             .exec()
             .then((data) => {
                    res.status(200).json({ data:data,
                    length:data.length });
              })
              .catch(err => {
                res.status(500).json({ err });
              });
});


 
const port = 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});