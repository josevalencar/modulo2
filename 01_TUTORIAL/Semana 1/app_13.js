// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3013;

// Cria o servidor
var app = express();

app.get('/', (req, res) => { // ESTRTURUA DE ENDPOINT
	req.query.nome // recebe um valor
	req.query.tel
	res.write("<h1> Etapa 1 - INSTALACAO - EndPoint GET</h1>")
	res.end("<h2>Hello " + req.query.nome + " voce conseguiu um GET! bem sucedido</h2>" + req.query.tel);
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




