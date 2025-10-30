const pokemons = await getPokemons();

console.table(pokemons);

// setTimeout(() => console.table(pokemons)
// , 10000);

// await getPokemons();


// async function getPokemons() {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//     const data = await response.json();
//     const pokemons = data.results;   

//     for (const pokemon of pokemons) {
//         const pokemonDetail = await getPokemonByUrl(pokemon.url);
//         pokemon.id = pokemonDetail.id;
//         pokemon.name = pokemonDetail.name;
//         pokemon.height = pokemonDetail.height;
//         pokemon.weight = pokemonDetail.weight;
//         pokemon.image = pokemonDetail.image;
//     }

//     return pokemons;
// }


// async function getPokemons() {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//     const data = await response.json();
//     const pokemons = data.results;   

//     pokemons.forEach(async pokemon => {
//         const pokemonDetail = await getPokemonByUrl(pokemon.url);
//         pokemon.id = pokemonDetail.id;
//         pokemon.name = pokemonDetail.name;
//         pokemon.height = pokemonDetail.height;
//         pokemon.weight = pokemonDetail.weight;
//         pokemon.image = pokemonDetail.image;
//     });

//     return pokemons;
// }


async function getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const pokemons = data.results;   

    const promises = pokemons.map(pokemon => getPokemonByUrl(pokemon.url));
    const pokemonsAllDetails = await Promise.all(promises);
    return pokemonsAllDetails;
}



async function getPokemonByUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    const pokemonDetail = {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.front_default,
    };

    // console.log(pokemonDetail);
    
    return pokemonDetail;
}