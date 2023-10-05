const pokeUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const fetchPokemonData = async (id) => {
    try {
        const response = await fetch(pokeUrl(id));
        if(!response) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data for Pokémon with ID ${id}: ${error.message}`);
        throw error;
    }
};

const generateHTML = (pokemons) => {
    return pokemons.map(({ name, id, types}) => {
        const elementTypes = types.map((typeInfo) => typeInfo.type.name);
        const paddedId = id.toString().padStart(3, '0');

        return `
        <li class="card ${elementTypes[0]}">
        <img class="card-image" alt="${name}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png"/>
        <h2 class="card-title">
            #${paddedId}<br>${name}
        </h2>
        <p class="card-subtitle" id="${elementTypes.join("-")}">${elementTypes.join(" | ")}</p>
        </li>
        `;
    }).join('');
};

const insertPokemonIntoPage = (html) => {
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = html
};

const generatePokePromises = () => {
    const promises = Array(890).fill().map((_, index) => fetchPokemonData(index + 1));

    return Promise.all(promises);
};

const init = async () => {
    try {
        const pokemonData = await generatePokePromises();
        const html = generateHTML(pokemonData);
        insertPokemonIntoPage(html);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

init();