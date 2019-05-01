module.exports = app => {

  app.get('/', (req,res) => {
    res.render('home');
  })

  app.get('/about', function(req, res) {
    res.render('about');
  });

  app.get('*', function(req, res) {
    res.redirect('/');
  });
};
