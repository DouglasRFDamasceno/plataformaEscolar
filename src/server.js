const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const models = require('../models');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes'));

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Servidor Rodando na porta ${port}...`);
})