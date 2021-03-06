const express = require('express');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.json());



var cors = require('cors')
app.use(cors())
app.listen(3000);

const connectDB=require('./config/db');
dotenv.config({path:'./config/config.env'});

connectDB();

//including routed folder

app.use('',require('../backend/routes/index'))
