export default class DummyService {
    static BASE_URL = 'https://dummyjson.com';

    async getProducts() {
        try {
            const response = await fetch(DummyService.BASE_URL + '/products?limit=10&delay=2000');
            const data = await response.json();
            return data.products
                .map( ({id, title: name}) => ({ id, name }) );
        } catch (e) {
            throw new Error('Cannot retrieve the products from server. Error into getProducts: ' + e.message);
        }
    }


    async getProductById(productId) {
        try {
            const response = await fetch(DummyService.BASE_URL + `/products/${productId}?limit=10&delay=2000`);
            const data = await response.json();
            return data.products
                .map( ({ title: name, ...otherProperties }) => ({ name, ...otherProperties }) );
        } catch (e) {
            throw new Error('Cannot retrieve the products from server. Error into getProducts: ' + e.message);
        }
    }


    async getCategories() {
        try {
            const response = await fetch(DummyService.BASE_URL + '/products/categories?limit=10&delay=2000');
            const data = await response.json();
            return data
                .map( ({slug: id, name}) => ({ id, name }) );
        } catch (e) {
            throw new Error('Cannot retrieve the categories from server. Error into getCategories: ' + e.message);
        }
    }

    async getProductsByCategoryId(categoryId) {
        try {
            const response = await fetch(DummyService.BASE_URL + `/products/category/${categoryId}?limit=10&delay=2000`);
            const data = await response.json();
            return data.products
                .map( ({id, title: name}) => ({ id, name }) );
        } catch (e) {
            throw new Error('Cannot retrieve the products from server. Error into getProductsByCategoryId: ' + e.message);
        }
    }
}

const service = new DummyService();
console.log(await service.getProductById(7));
