const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'modeloFisico.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());
app.get('/formacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM formacao'; // * seleciona tudo da lista
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`) // mensagem para o terminal
})