const mysql = require("mysql2");
const dotenv = require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

var sql = `create table if not exists user(
        id int not null auto_increment primary key,
        data varchar(50) not null,
        username varchar(50) not null,
        telefone varchar(20) not null,
        email varchar(50) not null,
        cep varchar(50) not null,
        password varchar(50) not null
        );`;

connection.execute(sql,(err, rows, fields)=>{
    if (err) {
        console.log(`Erro: ${err}`)
        
    } else {
        console.log(rows)
        
    }
});

module.exports = connection;
