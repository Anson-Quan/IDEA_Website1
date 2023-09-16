var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' }); // You would need to create an 'about' view template.
});
/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' }); // You would need to create a 'contact' view template.
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Our Projects' }); // You would need to create a 'projects' view template.
});
/* GET FAQ page. */
router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Frequently Asked Questions' }); // You would need to create a 'faq' view template.
});

/* GET Join Club page. */
router.get('/join', function(req, res, next) {
  res.render('join', { title: 'Join Our Club' }); // You would need to create a 'join' view template.
});

/* GET Sign In page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign In' }); // You would need to create a 'signin' view template.
});

module.exports = router;
module.exports = router;
