const API = 'https://swapi.dev/api/'

// TOOLS
async function api(parameter) {
    const apiUrl = `${API}${parameter}`
    try {
        let response = await fetch(apiUrl)
        let data = await response.json()
        return data
    } catch (e) {
        console.log('Fail to fetch.', e)
    }
}


function acortador(parameter) {
    return parameter.replace(/([\s\S]+)\/api\//g, '')
}

// Selectors
let namesContainer = document.querySelector('#names')
let tabPersonal = document.querySelector('.views #personal .info')
let tabHomeworld = document.querySelector('.views #homeworld .info')
let tabSpecies = document.querySelector('.views #species .info')
let tabVehicles = document.querySelector('.views #vehicles .info')
let tabStarships = document.querySelector('.views #starships .info')

// Writer
async function runApp() {

    let people = await api('people')
    console.log(people)
    people.results.forEach(async (item) => {
        let divName = document.createElement('div')
        divName.textContent = item.name
        namesContainer.append(divName)

        divName.addEventListener('click', async () => {
            let character = await api(acortador(item.url))
            console.log(character)
        })
    });
}

runApp()


