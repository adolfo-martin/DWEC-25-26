// endpoint
const url = 'https://pokeapi.co/api/v2/pokemon';

fetch(url)
    .then(response => response.json()) // preprocesamiento json obligatorio
    .then(data => console.table(data.results));
    ;