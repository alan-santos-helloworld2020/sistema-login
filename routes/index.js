var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Onload-Home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Onload-Login' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Onload-Cadastro' });
});

module.exports = router;
