'use strict';

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const expressHandlebars = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.engine(
    'hbs',
    expressHandlebars({
        layoutsDir: path.join(__dirname, './src/views/layouts'),
        defaultLayout: 'main',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/views/pages'));

app.get('/', (req, res) => res.render('index'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
