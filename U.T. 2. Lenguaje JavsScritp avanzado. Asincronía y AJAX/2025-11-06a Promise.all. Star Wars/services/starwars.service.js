export default class StarwarsService {
    async getFilmByUrl(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async getPersonByUrl(url) {

    }
}