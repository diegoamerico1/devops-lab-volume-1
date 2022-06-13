// Importação das dependências
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Criação das instâncias dos componentes
const app = express();
const router = express.Router();

// Carregamento as variáveis de ambiente
const API_URL = process.env.API_URL || 'http://localhost:3000';

// Criação da rota
router.get('/', async (_req, res) => {
    let message = '';
    let hasError = false;

    try {
        const response = await axios.get(`${API_URL}/api/welcome`);
        message = response.data.message;
    } catch (error) {
        console.error(`[ Error ] ${error}`);
        hasError = true;
        message = `Ocorreu um erro: ${error.message}`;
    }
    
    res.render('index', { title: 'Mercurianos', message, hasError });
});

// Definindo as configurações padrões da aplicação
app.set('API_URL', API_URL);
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

// Habilitando as funções que serão executadas entre as requisições e respostas (middlewares)
app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use('/', router);

module.exports = app;
