const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

// Configuração de sessão
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Importa e usa as rotas
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.use('/', authRoutes);
app.use('/', homeRoutes);

// Rota principal
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/register', function (request, response) {
    response.sendFile(path.join(__dirname, 'register.html'));
});
app.get('/auth', function (request, response) {
    response.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/home', function (request, response) {
    response.sendFile(path.join(__dirname, 'home.html'));
});

// Inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
