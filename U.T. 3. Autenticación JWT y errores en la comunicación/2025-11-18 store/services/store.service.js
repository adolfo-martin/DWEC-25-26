import { get } from "../utils/utils.library.js";

export default class StoreService {

    /**
     * The function gets all the categories.
     * @param {string} token The access token.
     * @returns {Promise<Array<{id: string, name: string}>>} The data recovered.
     * @throws {Error} An exception if cannot recover the information.
     */
    async getCategories(token) {
        const data = await get('https://dummyjson.com/auth/products/categories?delay=1000', token, 'getCategories');
        // primer ...: rest almacena en una variable el resto de propiedades no usadas
        // segundo ...: spread descompone un objeto u arreglo en sus partes
        return data.map(({slug: id, ...others}) => ({id, ...others}));
    }

    /**
     * The function gets all the products of a category.
     * @param {string} categoryId The id of the category.
     * @param {string} token The access token.
     * @returns {Promise<Array<{id: string, name: string}>>} The data recovered.
     * @throws {Error} An exception if cannot recover the information.
     */
    async getProductsByCategory(categoryId, token) {
        const data = await get(`https://dummyjson.com/auth/products/category/${categoryId}?delay=1000`, token, 'getProductsByCategory');
        // primer ...: rest almacena en una variable el resto de propiedades no usadas
        // segundo ...: spread descompone un objeto u arreglo en sus partes
        return data.products.map(({title: name, thumbnail: image, ...others}) => ({name, image, ...others}));
    }



}