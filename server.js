const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let ALUNOS = [
    { id: 1, nome: "Alice", curso: "Desenvolvimento de Sistemas" },
    { id: 2, nome: "Brenda", curso: "Redes de computadores" },
    { id: 3, nome: "Brenno", curso: "Administração" },
    { id: 4, nome: "Carlos", curso: "Desenvolvimento de Sistemas" },
];

app.get("/", (req, res) => {
    res.json({ mensagem: "API alunos funcionando!" });
});

// Busca todos os alunos da array em memória
app.get("/alunos", (req, res) => {
    res.status(200).json(ALUNOS);
});

// Busca aluno por ID
app.get("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    
    // Sintaxe corrigida do .find()
    const aluno = ALUNOS.find((a) => a.id === id);

    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }
    
    res.status(200).json(aluno);
});

// Cadastra um novo aluno
app.post("/alunos/cadastrar", (req, res) => {
    const { nome, curso } = req.body;

    if (!nome || !curso) {
        return res.status(400).json({ mensagem: "Nome e curso são obrigatórios" });
    }

    // Corrigido .length e aluno.id
    const novoId = ALUNOS.length > 0 ? Math.max(...ALUNOS.map((aluno) => aluno.id)) + 1 : 1;

    const novoAluno = {
        id: novoId,
        nome: nome,
        curso: curso
    };

    ALUNOS.push(novoAluno);

    res.status(201).json({
        mensagem: "Aluno cadastrado com sucesso",
        aluno: novoAluno
    });
});

// Atualiza um aluno existente
app.put("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    const { nome, curso } = req.body;

    const indice = ALUNOS.findIndex((aluno) => aluno.id === id);

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    if (!nome || !curso) {
        return res.status(400).json({ mensagem: "Nome e curso são obrigatórios" });
    }

    // Lógica de atualização movida para o lugar correto
    ALUNOS[indice] = {
        id: id,
        nome: nome,
        curso: curso
    };

    res.status(200).json({
        mensagem: "Aluno atualizado com sucesso",
        aluno: ALUNOS[indice]
    });
});

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${PORTA}`);
});