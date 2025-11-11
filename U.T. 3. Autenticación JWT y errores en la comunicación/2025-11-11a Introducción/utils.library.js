var token = await authenticateUserAndGetToken('emilys', 'emilyspass');
try {
    var categories = await getCategories(token);
} catch (e) {
    console.log(e.message);
}
console.log(categories);


async function authenticateUserAndGetToken(username, password) {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
      credentials: 'include'
    })
    
    const data = await response.json();
    
    const token = data.accessToken;
    return token;
}




async function getProducts(token) {
    const data = await get('https://dummyjson.com/auth/products', token, '[getProducts] Cannot get products');
    return data.products;
}


async function getCategories(token) {
    const data = await get('https://dummyjson.com/auth/products/category-list', token, '[getCategories] Cannot get categories');
    return data.categories;
}


/**
 * dfafdasdfas
 * @param {string} url 
 * @param {string} token 
 * @param {string} message 
 * @returns {object} The data recovered.
 * @throws {Error} An exception if cannot recover the information.
 */
async function get(url, token, message) {
    try {
        var response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }, 
        credentials: 'include'
        });
    } catch (e) {
        throw new Error(`${message}: ${e.message}`);
    }
    
    if (!response.ok) {
        throw new Error(`${message}: ${response.status} ${response.statusText}`);
    }
    
    try {
        var data = await response.json();
    } catch (e) {
        throw new Error(`${message}: ${e.message}`);
    }

    return data;
}


// class CommunicationException extends Error {
//     constructor(message, code) {
//         super(message);
//         this.code = code;
//     }

//     get code() {
//         return this.code;
//     }
// }