const PORT = 7777;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json())

let animals = [
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

app.post('/animals', (req, res) => {


    animals.push({
        name: req.body.name,
        strength: req.body.strength
    })
    res.sendStatus(204)
})

app.delete('/animals/:id', (req, res) => {
    const idToDelete = req.params.id

    animals = animals.filter((animal) => animal.id !== idToDelete)
    res.sendStatus(200)

})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})

