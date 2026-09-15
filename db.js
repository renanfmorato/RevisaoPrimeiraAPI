const mysql = require("mysql/promise");

const conexao = mysql.createPoll({
    host: "localhost",
    user:"root",
    password:"root",
    database:"turmads1b",
    port : 3306
});

module.exports = conexao;