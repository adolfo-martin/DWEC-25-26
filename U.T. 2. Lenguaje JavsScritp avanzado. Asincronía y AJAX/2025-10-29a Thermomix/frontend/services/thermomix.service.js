export default class ThermomixService {

    async retrieveBooks() {
        const url = 'http://127.0.0.1:99/controlador.php?operacion=obtener_libros';
        const response = await fetch(url);
        const data = await response.json();
        return data.libros;
    }

    async retrieveDishesByBook(bookId) {
        const url = 'http://127.0.0.1:99/controlador.php?operacion=obtener_platos&libro=' + bookId;
        const response = await fetch(url);
        const data = await response.json();
        return data.platos;
    }
}