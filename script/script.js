const pokeUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () => Array(150).fill().map((_,index) => 
    fetch(pokeUrl(index + 1)).then(reponse => reponse.json()))

    const generateHTML = pokemons => pokemons.reduce((accumulator, {name, id, types}) => {
            const elementTypes = types.map(typeInfo => typeInfo.type.name);

            accumulator += `
                <li class="card ${elementTypes[0]}">
                <img class="card-image" alt="${name}" src="http://pokeres.bastionbot.org/images/pokemon/${id}.png"/>
                <h2 class="card-title">${id}.${name}</h2>
                <p class="card-subtitle">${elementTypes.join(" | ")}</p>
                </li> `

            return accumulator
        }, "")
    
    const insertPokemonIntopage = pokemons => {
        const ul = document.querySelector('[data-js="pokedex"]')
        ul.innerHTML = pokemons
    }

    
        
const pokePromises = generatePokemonPromises();

Promise.all(pokePromises)
    .then(generateHTML)
    .then(insertPokemonIntopage)

            
            


