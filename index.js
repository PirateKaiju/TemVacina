const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session')

const User = require("./models/user.js").User;

const conStr = "mongodb://localhost:27017/temvacinadb";

const app = express();

mongoose.connect(conStr);

//Registering callbacks for passport configuration
require('./config/passport.js')(passport);

//Template Engine
//app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');

//Session

app.use(session({
    secret: 'this is a secret',
    resave: true,
    saveUninitialized:true,
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Flash



//Auth guard
const ensureAuthenticated = require('./config/auth.js').ensureAuthenticated;


app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/dashboard', ensureAuthenticated ,(req, res) => {
    res.send('This is the /authenticated/ dashboard!');
});

/*app.get('/createtest', (req, res) => {

    const user = new User({
        name: 'Test user',
        email: 'test@testmail.com',
        password: 'nopass',
    });

    user.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });

});*/

app.use(express.urlencoded({ extended: false }));

const userRoutes = require('./routes/users.js').router;
app.use('/users', userRoutes);

app.listen(3000);