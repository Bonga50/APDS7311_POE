const express = require('express');
const app = express();
const urlprefix = '/api';
const Posts = require('./models/posts');
const fs = require('fs')
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cert = fs.readFileSync('./Keys/certificate.pem');
const options = {
    server: {sslCA: cert}
};



const connstring='mongodb+srv://Admin:LV0mHpYmKtHTajGR@cluster0.fw6znqm.mongodb.net/?retryWrites=true&w=majority'
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

mongoose.connect(connstring).then(()=> {
    console.log('Connected to Mongo');
}).catch((err)=>{
    console.log(err);
    console.log('Not connected to Mongo');
},options);

app.use(express.json());

app.use((reg,res,next)=>
{
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
 res.setHeader('Access-Control-Allow-Methods', '*');
 next();
});

// Use Helmet for setting HTTP headers for security
app.use(helmet());
// Use Morgan for logging HTTP requests
app.use(morgan('tiny'));

app.use(urlprefix+'/posts', postRoutes);
app.use(urlprefix+'/users', userRoutes);




module.exports = app