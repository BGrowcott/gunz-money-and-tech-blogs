const router = require('express').Router();
const withAuth = require('../utils/auth');


// homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});


//login
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
  
    res.render('login');
  });

module.exports = router;