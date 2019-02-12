const mongoose = require('mongoose'),
    express = require('express');

const authRoutes = require('./routes/auth-routes'),
    passportSetup = require('./config/passport'),
    keys = require('./config/keys')

const app = express();

/** Connect to MongoDB */
mongoose.connect(keys.mongo.dbURI, () => {
    console.log(` Connected to MongoDB `)
});

/** Set views engine */
app.set('view engine', 'ejs');
let port = process.env.PORT || 3000;

/** Set Home Page */
app.get('/', (req, res) => {
    res.render('home');
});

/** Setup Auth Routes */
app.use('/auth', authRoutes);

/** Start APP */
app.listen(port, () => {
    console.log(" **** Server startred on PORT " + port);
})