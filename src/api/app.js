const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');

const UserRouter = require('./routes/user.routes');
const RecipeRouter = require('./routes/recipe.routes');
const AuthRouter = require('./routes/auth.routes');

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/users', UserRouter);
app.use('/recipes', RecipeRouter);
app.use('/login', AuthRouter);

// /images é o caminho/end-point da API onde as imagens estarão disponíveis
// path.join(__dirname, '..', 'uploads') é o caminho da pasta onde o multer deve salvar suas imagens ao realizar o upload
// a pasta `uploads` está em `./src/uploads` e não deve ser renomeada ou removida (assim como o arquivo `ratinho.jpg`)
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/images/:id', (req, res) => {
  const { id } = req.params;
  res.sendFile(path.join(__dirname, '..', 'uploads', id));
});

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
