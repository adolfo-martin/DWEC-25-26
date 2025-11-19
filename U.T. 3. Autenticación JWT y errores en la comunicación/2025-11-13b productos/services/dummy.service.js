export default class DummyService {

    /**
     * Returns a promise with an array of 30 products.
     * @returns { Promise<Array<{id: number, title: string, price: number }>> }
     */
    async getProducts() {
        const response = await fetch('https://dummyjson.com/products?delay=1000&select=id,title,price');
        const data = await response.json();
        return data.products;
    }
}