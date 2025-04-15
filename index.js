const PORT = 7777;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const animals = [
    {
        name: 'Gato',
        strength: 3
    },
    {
        name: 'Elefante',
        strength: 10
    },
    {
        name: 'Murcielago',
        strength: 3
    },
]

app.get('/animals', (req, res) => {
    res.send(animals)
})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})

