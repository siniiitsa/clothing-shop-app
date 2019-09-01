const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient; // подключаем пакет для работы с MongoDB
const db = require('../backend/config/db'); // подключаем файл с настройками для подключения к базе данных

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {
    if(err) return console.log(err); // обработка ошибки
    const database = client.db(db.dbName); // указываем к какой базе подключаться
    database.name = db.dbNameCol;

    require('../backend/routes/routes')(app, database); // импортируем роуты

    app.listen(9000, () => { // назначаем порт для прослушивания
        console.log('Connected to '+ db.url);
        console.log('We are live on http://localhost:9000');
    });
})