// endpoint
const url = 'https://pokeapi.co/api/v2/pokemon?limit=2000';

const response = await fetch(url);
const data = await response.json(); // preprocesamiento json obligatorio
console.table(data.results.map(pokemon => pokemon.name).sort());