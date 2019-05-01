const passport = require('passport');
const isLoggedIn = require('../services/isLoggedIn');
const db = require('../models/index');


module.exports = app => {
  // Login Form
  app.get('/admin/login', function(req, res) {
    res.render('admin/login');
  });

  // app.get('/admin/signup', function(req, res) {
  //   res.render('admin/signup');
  // });

  // Logout
  app.get('/admin/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Login Route
  app.post('/admin/login', passport.authenticate('local-login', { failureRedirect: '/admin/login' }), function(req, res) {
    res.redirect('/');
  });

  app.get('/admin/images', isLoggedIn, function(req, res) {
    res.render('admin/images/new');
  });

  app.post('/admin/images', isLoggedIn, upload.single('img'), function(req, res) {
    res.redirect('/');
  });
};
