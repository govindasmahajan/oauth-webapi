const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20');

const User = require('../modules/userModule'),
    keys = require('./keys');

/** Google Auth Config */
passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clintID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        /** Passport callback function */

        console.log(' ---- Google Auth Callback: ', profile.id, profile.displayName);
        new User({
            userName: profile.displayName,
            googleId: profile.id
        }).save().then(newUser => {
            console.log(' newUser created !!', newUser);
        })
    })
)