const express = require('express')
const funcoes = require('./descricao');
const acharPacote = require('./descricao');

const rotas = express();

rotas.get('/pacote/:nomePacote', acharPacote);

module.exports = rotas