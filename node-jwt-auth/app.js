const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose')
const userRouter = require('./routers/user')

require('dotenv').config()
require('./db/db')

app = express();

app.use(express.json())
app.use(userRouter)

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result)=>{
        console.log('Connected to Mongo')
        app.listen(3000);

    })
    .catch((err) => console.log(err));

// initialize express



// set view engine to ejs and default file path to templates
app.set('views', './views');
app.set('view engine', 'ejs');

// set bodyParsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// set static files
app.use(express.static('static'));

// initiliaze mongoDB

// handle 404s
app.use((req, res) => {
    res.status(404).render('404');
});