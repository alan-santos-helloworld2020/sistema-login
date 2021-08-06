var express = require('express');
var router = express.Router();
var mysql = require('../db_config/db_config')
const moment = require('moment')
var data_hoje = moment().format('DD/MM/YYYY')
console.log(data_hoje)

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


//*************************************************** */
router.post("/logar",(req,res)=>{



})

router.post("/cadastrar",(req,res)=>{

  const {username,telefone,email,cep,password} = req.body;
  var sql = "insert into user(data,username,telefone,email,cep,password) values (?,?,?,?,?,?);";
  mysql.execute(sql,[
    data_hoje,
    username,
    telefone,
    email,
    cep,
    password
  ],(err,results,fields)=>{
    if(err) console.log(err)
    if( parseInt(results.affectedRows) > 0){
      res.status(200).json({data:'Dados inseridos com sucesso!'});
    }else{
      res.status(401).json({data:'Desculpe houve um erro!'});
    }

  })

})

module.exports = router;
