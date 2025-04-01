const express = require('express');
const router = express.Router();

//fazendo essa verificação pra não deixar um usurio não logado ir pra tela home 
router.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(__dirname + '/../static/home.html');
    } else {
        response.sendFile(__dirname + '/../static/index.html');
    }
});

module.exports = router;