const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

//Import Routes
const postsRoute = require('./routes/main');
const postsRegister = require('./routes/register');
const postsSignin = require('./routes/Signin');
const postsContact = require('./routes/Contact');
const postsProfile = require('./routes/Profile');

//Middleware
app.use('/', postsRoute);
app.use('/Register', postsRegister);
app.use('/Signin', postsSignin);
app.use('/Contact', postsContact);
app.use('/Profile', postsProfile );

//Connect to a database
mongoose
  .connect(
    'mongodb+srv://test:test123@iwp.rqcsy.mongodb.net/IWP?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Atlas connected...'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
