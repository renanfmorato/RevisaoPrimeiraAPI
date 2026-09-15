const express = require("express");
const cors = require("cors");

// import express from "express";
// import cors from cors;

const app = express();

app.use(cors());
app.use(express.json());
// {
//     "nome": "Pedro",
//     "curso": "Desenvolvimento de Sistema"
// }

let ALUNOS = [
    {id : 1, nome: "Alice", curso: "Desenvolvimento de Sistemas"},
    {id : 2, nome: "Brenda", curso: "Redes de computadores"},
    {id : 3, nome: "Brenno", curso: "Administração"},
    {id : 4, nome: "Carlos", curso: "Desenvolvimento de Sistemas"},
]
