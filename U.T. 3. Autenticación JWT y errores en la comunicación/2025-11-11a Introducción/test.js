import { authenticateUserAndGetToken, get } from "./utils.library.js";

try {
    var token = await authenticateUserAndGetToken('emilys', 'emilyspass');
} catch (e) {
    console.log(e.message);
    process.exit();
}

try {
    var result = await getProducts(token);
} catch (e) {
    console.log(e.message);
}
console.log(result);


async function getProducts(token) {
    const data = await get('https://dummyjson.com/auth/products', token, '[getProducts] Cannot get products');
    return data.products;
}


async function getCategories(token) {
    const data = await get('https://dummyjson.com/auth/products/categories', token, '[getCategories] Cannot get categories');
    return data;
}