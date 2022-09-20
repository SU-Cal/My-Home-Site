let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      { title: 'Home',
              h1: 'Welcome Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
