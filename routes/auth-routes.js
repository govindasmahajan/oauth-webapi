const router = require('express').Router(),
    Passport = require('passport');

/** Auth Login */
router.get('/login', (req, res) => {
    res.render('login')
});

/** Auth Logout */
router.get('/logout', (req, res) => {
    /** Add Passport Google Log out Here */
    res.send('Loggin user out!!')
});

/** Auth with Google */
router.get('/google', Passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', Passport.authenticate('google'), (req, res) => {
    res.send(' You are at Google Auth Redirect')
})
module.exports = router;
