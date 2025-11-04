export default class DummyService {
    async getCategories() {
        const url = 'https://dummyjson.com/products/categories?delay=1000';
        const response = await fetch(url);
        const data = await response.json();
        return data.map( ({ slug: id, name }) => ({ id, name }));
    }

    async getProductsByCategory(categoryId) {
        const url =`https://dummyjson.com/products/category/${categoryId}?delay=1000`;
        const response = await fetch(url);
        const data = await response.json();
        return data.products.map(product => product.id);
    }

    async getProductById(productId) {
        const url = `https://dummyjson.com/products/${productId}?delay=1000`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}