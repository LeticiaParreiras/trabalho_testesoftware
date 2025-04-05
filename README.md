# Instalação
## 1. Clonando Repositorio
Clone esse repositorio
```
git clone https://github.com/LeticiaParreiras/trabalho_testesoftware.git
```
acesse a pasta do projeto
```
cd trabalho_testesoftware
```
Instale as dependências do projeto
```
npm install
```
## 2.Configurando o banco de dados
crie o banco de dados
```
create database bd_testesoftware;
use bd_testesoftware;

create table Usuarios(
	id int auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) unique not null,
    senha varchar(50) not null
);
```
Se necessário, edite o arquivo ``config/db.js`` para colocar suas credenciais:
```
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@123',  // Substitua pela senha correta do MySQL
    database: 'bd_testesoftware'
});

module.exports = connection;
```
## 3. Rodando
inicie o servidor 
```
node serve.js
```
abra o navegador e acesse 
http://localhost:3000/

# Explicando
explicando nossa pasta pra não nos perdemos
```
/trabalho_testesoftware
│── 📂 config/        # Configuração do banco de dados
│── 📂 node_modules/  # Dependências do projeto
│── 📂 routes/        # Rotas do backend (ex: login)
│── 📂 static/        # Arquivos estáticos (CSS, JS, imagens)
│── 📄 index.html     # Página principal 
│── 📄 home.html      # Página inicial com usuario logado 
│── 📄 login.html     # Página de login
│── 📄 register.html  # Página de registro
│── 📄 package.json   # Configuração do projeto (dependências do Node.js)
│── 📄 package-lock.json # Registro exato das versões dos pacotes
│── 📄 serve.js       # Arquivo principal do servidor Node.js
```
