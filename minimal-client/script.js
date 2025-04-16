const API_URL = 'http://localhost:7777'


const createAnimalButton = document.getElementById('createAnimalButton')

createAnimalButton.innerText = 'Send animal'



const createAnimal = () => {

    const inputAnimal = document.getElementById('animalToCreate')
    const inputStrength = document.getElementById('strengthToCreate')

    const animalToCreate = document.getElementById('animalToCreate').value
    const strengthToCreate = Number(document.getElementById('strengthToCreate').value)

    fetch(API_URL + '/animals', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: animalToCreate,
            strength: strengthToCreate,
        }),
    }).then(
        inputAnimal.value = '',
        inputStrength.value = '',
        getAnimals()
    )
};

const getAnimals = () => {
    fetch(API_URL + '/animals', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        body: JSON.stringify()

    })
        .then((res) => res.json())
        .then((animals) => {
            console.log(animals)
            const animalsContainer = document.getElementById('animalsContainer')
            animalsContainer.innerHTML = ''

            animals.forEach(animal => {
                animalsContainer.innerHTML +=
                    ` <h2>${animal.name} Strength:${animal.strength} </h2>`
            });
        })
}

getAnimals()


createAnimalButton.addEventListener('click', createAnimal);