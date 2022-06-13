#!/usr/bin/env node

// Importação das dependências
const app = require('./src/app');

// Criação do servidor Http que irá fornecer a porta para recebimento das nossas requisições
const server = app.listen(process.env.PORT || 3000, () => {
    const { port } = server.address();
    console.log(`Server running on port ${port}`);
});
