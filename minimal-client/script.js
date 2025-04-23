const API_URL = 'http://localhost:8000'


const createCityButton = document.getElementById('createCityButton')


const cityToCreate = document.getElementById('cityToCreate')

const countryToCreate = document.getElementById('countryToCreate')

createCityButton.innerText = 'Create cities'



const createCity = () => {

    const inputName = document.getElementById('cityToCreate')
    const inputCountry = document.getElementById('countryToCreate')

    const cityToCreate = document.getElementById('cityToCreate').value
    console.log(cityToCreate)
    const countryToCreate = document.getElementById('countryToCreate').value

    fetch(API_URL + '/cities', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            city: cityToCreate,
            country: countryToCreate,
        }),
    }).then(
        inputName.value = '',
        inputCountry.value = '',
        getCities()
    )
};

const deleteCity = (cityId) => {
    fetch(`${API_URL}/cities/${cityId} `, {
        method: 'DELETE',

    }).then(getCities())
}


const getCities = () => {
    fetch(API_URL + '/cities', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
        body: JSON.stringify()

    })
        .then((res) => res.json())
        .then((cities) => {
            console.log(cities)
            const citiesContainer = document.getElementById('citiesContainer')
            citiesContainer.innerHTML = ''

            cities.forEach(city => {
                console.log(city.name)
                citiesContainer.innerHTML +=
                    ` <h2>${city.name} Country:${city.country} <button id="deleteButton" onclick="deleteCity(${city.id})">Delete City</button> </h2>`
            });
        })
}


getCities()


createCityButton.addEventListener('click', createCity);

// deleteButton.addEventListener('click', deleteAnimal);