import axios from 'axios';

export class ApiRequest {

    async get(url, contentType = 'application/json') {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': contentType,
                'Accept': '*/*',
            },
        });
        return response.data;
    }

    async post(url, data, contentType = 'application/json') {
        const response = await axios.post(url, data, {
            headers: { 'Content-Type': contentType },
        });
        return response.data;
    }

    async put(url, data, contentType = 'application/json') {
        const response = await axios.put(url, data, {
            headers: { 'Content-Type': contentType },
        });
        return response.data;
    }

    async delete(url, contentType = 'application/json') {
        const response = await axios.delete(url, {
            headers: { 'Content-Type': contentType },
        });
        return response.data;
    }
}
