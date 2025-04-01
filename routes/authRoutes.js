const express = require('express');
const connection = require('../config/db'); // Importa o banco de dados

const router = express.Router();

// Rota de Login
router.post('/auth', function (request, response) {
    let { email, senha } = request.body;

    if (!email || !senha) {
        return response.status(400).send('Por favor, insira email e senha!');
    }

    connection.query('SELECT * FROM Usuarios WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {
        if (error) {
            console.error(error);
            return response.status(500).send('Erro ao buscar usuário!');
        }

        if (results.length === 0) {
            return response.status(401).send('Usuário ou senha incorretos!');
        }


        if (results.length > 0) {
            request.session.loggedin = true;
            request.session.user = results[0];
            response.redirect('/home');
        } else {
            response.status(401).send('Usuário ou senha incorretos!');
        }
    });
});

// Rota de Registro
router.post('/register', function (request, response) {
    let { nome, email, senha } = request.body;

    if (!nome || !email || !senha) {
        return response.status(400).send('Por favor, preencha todos os campos!');
    }

    connection.query('SELECT * FROM Usuarios WHERE email = ?', [email], async function (error, results) {
        if (error) {
            console.error(error);
            return response.status(500).send('Erro ao verificar e-mail!');
        }

        if (results.length > 0) {
            return response.status(409).send('E-mail já cadastrado!');
        }
        connection.query('INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [nome, email, senha],
            function (error) {
                if (error) {
                    console.error(error);
                    return response.status(500).send('Erro ao criar usuário!');
                }
                response.status(201).send('Usuário cadastrado com sucesso!');
            }
        );
    });
});

module.exports = router;
