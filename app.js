//EXPRESS REQUERIDO
const express = require('express');
const app = express();

// PUERTO CONFIGURADO
const port = 3030;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

//CONFIGURAMOS RUTAS A NUESTROS ARCHIVOS PARA ABRIRLOS EN NAVEGADOR
const path = require('path');
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')));
app.get('/berners-lee', (req, res) => res.sendFile(path.join(__dirname, 'views', 'berners-lee.html')));
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')));
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')));
app.get('/hopper', (req, res) => res.sendFile(path.join(__dirname, 'views', 'hopper.html')));
app.get('/lovelace', (req, res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')));
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')));

// RUTAS ESTATICAS PARA ENLAZAR ARCHIVOS ENRE SI
app.use(express.static('public'));
app.use(express.static('views'));

//ESTO ES UNA PRUEBA PARA https://vscode.dev/