// instancia o express
const express = require('express');
const server = express();

server.get('/', (req, res) => {
return res.json({mensagem: 'deu good'});
});

//caminho de especificação
///http://localhost:3000/
server.listen(3000, () =>{
    console.log('Servidor Funcionando')
});