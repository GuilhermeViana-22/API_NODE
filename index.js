// instancia o express
const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/filmes', (req, res) => {
//retorna o json de filmes
return res.json(filmes);
});

//caminho de especificação
///http://localhost:3000/
server.listen(3000, () =>{
    console.log('Servidor Funcionando')
});