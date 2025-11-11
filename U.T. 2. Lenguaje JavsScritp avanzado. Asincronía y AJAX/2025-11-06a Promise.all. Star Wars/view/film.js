import StarwarsService from "../services/starwars.service.js";

setup();

function setup() {
    const filmId = retrieveFilmFromUrl();
}

function retrieveFilmFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const filmId = params.get('film');
    // console.log(filmId);
    return filmId;
}

function showTitle(filmId) {

}

function showCharacters(filmId) {
    
}


































const service = new StarwarsService();

const url = `https://swapi.dev/api/films/${filmId}`;
const film = await service.getFilmByUrl(url);

document.querySelector('#tH1Title').textContent = film.title;
