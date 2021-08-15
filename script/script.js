const pokeUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () => Array(890).fill().map((_,index) => 
    fetch(pokeUrl(index + 1)).then(reponse => reponse.json()))
     
    const generateHTML = pokemons => pokemons.reduce((accumulator, {name, id, types}) => {
            const elementTypes = types.map(typeInfo => typeInfo.type.name);
            if (id < 10) {
                id2 = "00";
            }else if (id > 9 && id <100) {
                id2 = "0"
            }else {
                id2 = "";
            }
            accumulator += `
                <li class="card ${elementTypes[0]}">
                <img class="card-image" alt="${name}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//${id2+id}.png"/>
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

            
            


