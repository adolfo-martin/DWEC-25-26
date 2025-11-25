export default class AuthService {

    /**
     * 
     * @param {*} username 
     * @param {*} password 
     * @returns 
     */
    async validateUser(username, password) {
        const url = 'http://127.0.0.1:8081/api/login_user';

        let response;
        try {
            response = await fetch(url, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        if (!response.ok) {
            throw new Error(`Cannot validate user: [${response.status} ${response.statusText}]`);
        }

        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`Cannot validate user: ${error}`);
        }

        if (!data.ok) {
            throw new Error(`Cannot validate user: ${data.message}`);
        }

        return data.accessToken;
    }
}