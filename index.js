const PORT = 7777;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json())

let animals = [
    {
        id: 1,
        name: 'Gato',
        strength: 3
    },
    {
        id: 2,
        name: 'Elefante',
        strength: 10
    },
    {
        id: 3,
        name: 'Murcielago',
        strength: 3
    },
]

app.get('/animals', (req, res) => {
    res.send(animals)
})

app.post('/animals', (req, res) => {

    const idAnimal = animals.length

    if (!req.body) {
        res.status(404).send('Body not found')
    }

    animals.push({
        id: idAnimal,
        name: req.body.name,
        strength: req.body.strength
    })
    res.sendStatus(204)
})

app.delete('/animals/:id', (req, res) => {
    const idToDelete = Number(req.params.id)

    const filteredAnimals = animals.filter((animal) => animal.id !== idToDelete)
    if (filteredAnimals.length === animals.length) {
        res.status(404).send('no items deleted')
    } else {
        animals = filteredAnimals
        res.sendStatus(200)
    }
})

app.put('/animals/:id', (req, res) => {
    const idToDelete = Number(req.params.id)

    if (!req.body) {
        res.status(404).send('Body not found')
    }

    const nameToUpdate = req.body.name
    const strengthToUpdate = req.body.strength

    if (!nameToUpdate || !strengthToUpdate) {
        res.send('Name or Strength not provided to update')
    }

    const indexAnimal = animals.findIndex((animal) => { animal.id === idToDelete })
    if (indexAnimal >= 0) {
        animals[indexAnimal].name = nameToUpdate
        animals[indexAnimal].strength = strengthToUpdate
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})

