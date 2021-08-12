var express = require("express");
var router = express.Router();
var mysql = require("../db_config/db_config");
const moment = require("moment");
const bcrypt = require("bcrypt");
var data_hoje = moment().format("DD/MM/YYYY");
console.log(data_hoje);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Onload-Home" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Onload-Login" });
});

router.get("/cadastro", function (req, res, next) {
  res.render("cadastro", { title: "Onload-Cadastro" });
});

//*************************************************** */

router.post("/logar", (req, res) => {
  const { email, password } = req.body;
  mysql.query('select * from user where email=? and password=?',[email,password],(err,result)=>{
    if(err){return res.json({data:err})}
    
    if(result.length < 1){
      res.json({data:"Falha na autenticação!"})
    }else{
      res.json({data:"Logado com sucesso!"})
    }
  })
});

router.post("/cadastrar", (req, res) => {
  var { username, telefone, email, cep, password } = req.body;
  mysql.query("select * from user where email=?", [email], (erp, resp) => {
    if(erp){ return res.status(500).json({ data:erp})};
    if (resp.length > 0) {
      res.status(401).json({ data:'Falha na autenticação!'})
    } else {
      bcrypt.hash(password, 10, (erb, hash) => {
        if (erb) {
          return res.json({ data: erb });
        }
        console.log(hash);

        var sql="insert into user(data,username,telefone,email,cep,password) values (?,?,?,?,?,?);";
        mysql.execute(
          sql,
          [data_hoje, username, telefone, email, cep, hash],
          (err, results) => {
            if (err) console.log(err);
            if (results) {
              res.status(200).json({ data: "Dados inseridos com sucesso!" });
            } else {
              res.status(403).json({ data: "Desculpe houve um erro!" });
            }
          }
        );
      });
    }
  });
});

module.exports = router;
