// instancia o express
const express = require('express');
const server = express();

server.get('/', (req, res) => {

});

server.listen(3000, () =>{
    console.log('Servidor Funcionando')
});