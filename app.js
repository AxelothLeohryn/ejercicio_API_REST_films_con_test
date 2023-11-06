require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const route = require('./routes/films.js');

//Rutas
app.use('/api/film', route);





app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})

module.exports = app;