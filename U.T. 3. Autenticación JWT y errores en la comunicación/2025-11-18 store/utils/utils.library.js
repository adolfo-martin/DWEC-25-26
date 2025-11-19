/**
 * The function authenticates an user.
 * @param {string} username The username.
 * @param {string} password The password.
 * @returns {Promise<string>} The token.
 * @throws {Error} An exception if there is a proble.
 */
export async function authenticateUserAndGetToken(username, password) {
    try {
        var response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 30,
            }),
            // credentials: 'include'
        });
    } catch (e) {
        throw new Error(`[authenticateUserAndGetToken] Cannot authenticate user: ${e.message}`);
    }

    if (!response.ok) {
        throw new Error(`[authenticateUserAndGetToken] Cannot authenticate user: ${response.status} ${response.statusText}`);
    }

    try {
        var data = await response.json();
    } catch (e) {
        throw new Error(`[authenticateUserAndGetToken] Cannot authenticate user: ${e.message}`);
    }

    return data.accessToken;
}


/**
 * The function makes a get http operation.
 * @param {string} url The url of the endpoint.
 * @param {string} token The access token.
 * @param {string} errorMessage The message to use when failing.
 * @returns {Promise<any>} The data recovered.
 * @throws {Error} An exception if cannot recover the information.
 */
export async function get(url, token, errorMessage) {
    try {
        var response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            // credentials: 'include'
        });
    } catch (e) {
        throw new Error(`${errorMessage}: ${e.message}`);
    }

    if (!response.ok) {
        throw new Error(`${errorMessage}: ${response.status} ${response.statusText}`);
    }

    try {
        var data = await response.json();
    } catch (e) {
        throw new Error(`${errorMessage}: ${e.message}`);
    }

    return data;
}

/**
 * The function decoded a token.
 * @param {string} token The encoded token.
 * @returns {any} The decoded token.
 * @throws {Error} Raises an exception if there is a problem.
 */
export function decodeToken(token) {
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    return tokenDecodificado;
}





// /**
//  * The function makes a post http operation.
//  * @param {string} url The url of the endpoint.
//  * @param {string} token The access token.
//  * @param {string} errorMessage The message to use when failing.
//  * @returns {Promise<any>} The data recovered.
//  * @throws {Error} An exception if cannot recover the information.
//  */
// export async function post(url, payload, token, errorMessage) {
//     try {
//         const response = await fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload),
//             credentials: 'include'
//         });
//     } catch (e) {
//         throw new Error(`${errorMessage}: ${e.message}`);
//     }

//     if (!response.ok) {
//         throw new Error(`${errorMessage}: ${response.status} ${response.statusText}`);
//     }

//     try {
//         var data = await response.json();
//     } catch (e) {
//         throw new Error(`${errorMessage}: ${e.message}`);
//     }

//     return data;
// }


// class CommunicationException extends Error {
//     constructor(message, code) {
//         super(message);
//         this.code = code;
//     }

//     get code() {
//         return this.code;
//     }
// }