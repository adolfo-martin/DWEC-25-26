export default class PlaymobilService {


    static async get(url, errorMessage, token) {
        // Comprueba si el servidor está encendido
        let response;
        try {
            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            response = await fetch(url, {
                method: 'get',
                headers
            });
        } catch (error) {
            throw new Error(`${errorMessage}: ${error}`);
        }

        // Comprueba si el fetch fue correcto
        if (!response.ok) {
            throw new Error(`${errorMessage}: [${response.status} ${response.statusText}]`);
        }

        // Comprueba si estoy recibiendo JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            throw new Error(`${errorMessage}: ${error}`);
        }

        // Comprueba si el data es correcto
        if (!data.ok) {
            throw new Error(`${errorMessage}: ${data.message}`);
        }

        return data;
    }


    async getSeries(token) {
        const url = 'http://192.168.0.48:8082/api/series';
        const errorMessage = `Cannot retrieve series`;
        const data = await PlaymobilService.get(url, errorMessage, token);
        return data.series;
    }


    /** */
    async getSerieByUuid(uuid, token) {
        const url = 'http://192.168.0.48:8082/api/serie/' + uuid;
        const errorMessage = `Cannot retrieve serie ` + uuid;
        const data = await PlaymobilService.get(url, errorMessage, token);
        return data.serie;
    }


    async getBoxesBySerie(serieUuid, token) {
        const url = 'http://192.168.0.48:8082/api/serie/' + serieUuid + '/boxes';
        const errorMessage = `Cannot retrieve boxes of serie ` + serieUuid;
        const data = await PlaymobilService.get(url, errorMessage, token);
        return data.boxes;
    }


    async getBoxByUuid(uuid, token) {
        const url = 'http://192.168.0.48:8082/api/box/' + uuid;
        const errorMessage = `Cannot retrieve box ` + uuid;
        const data = await PlaymobilService.get(url, errorMessage, token);
        return data.box;
    }
}