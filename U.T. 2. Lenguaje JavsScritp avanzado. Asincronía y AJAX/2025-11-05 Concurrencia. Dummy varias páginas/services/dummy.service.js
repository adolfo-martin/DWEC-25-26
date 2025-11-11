export default class DummyService {
    async getCategories() {
        const url = 'https://dummyjson.com/products/categories?delay=1000';
        const response = await fetch(url);
        const data = await response.json();
        return data.map( ({ slug: id, name }) => ({ id, name }));
    }

    /**
     * Gets all the identifiers of the products belonging to the category provided as argument.
     * @param {string} categoryId 
     * @returns {number[]}
     */
    async getProductsByCategory(categoryId) {
        const url =`https://dummyjson.com/products/category/${categoryId}?delay=1000`;
        const response = await fetch(url);
        const data = await response.json();
        return data.products.map(product => product.id);
    }

    /**
     * Gets one products identified by its identifier.
     * @param {number} productId 
     * @returns {{ id: number, name: string, description: string, brand: string, price: number, image: string }}
     */
    async getProductById(productId) {
        const url = `https://dummyjson.com/products/${productId}?delay=1000`;
        const response = await fetch(url);
        const data = await response.json();
        const { id, title: name, description, brand, price, thumbnail: image } = data;
        return { id, name, description, brand, price, image };
    }
}

// console.table(await new DummyService().getProductsByCategory('laptops'));

// console.log(await new DummyService().getProductById(78));