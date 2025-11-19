import { get } from "../utils/utils.library.js";

export default class StoreService {

    /**
     * The function gets all the categories.
     * @param {string} token The access token.
     * @returns {Promise<Array<{id: string, name: string}>>} The data recovered.
     * @throws {Error} An exception if cannot recover the information.
     */
    async getCategories(token) {
        const data = get('https://dummyjson.com/auth/products/categories?delay=1000', token, 'getCategories');
        return data.map(({slug: id, ...others}) => ({id, ...others}));
    }

}