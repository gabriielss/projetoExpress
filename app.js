const express = require('express'); // Importando o modulo Express, da pasta node_modules.

let app = express(); // Definindo uma variavel da qual podemos ultilizar todas funçoes do Express de maneira mais simplificada.

// Criando rota - HOME
app.get('/', (req, res)=>res.send('Seja Bem vindo a HOME'));
// Criando Server com Express
app.listen(3000, ()=> console.log('Servidor Rodando na porta 3000'));// No express somente o app.listen(); é suficiente para levantar um Servidor, internamente ele usará o metodo ".createServer" do modulo http. Segundo param é uma callback, sendo ela uma arrow function(esse segundo param não é obrigatorio, mas são boas praticas).