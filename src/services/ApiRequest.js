import axios from 'axios';

export class ApiRequest {

    getErrorMessage(error) {
        if (error.response) {
            return error.response.data?.error || `Request failed: ${error.response.status}`;
        } else if (error.request) {
            return 'Network error: Unable to connect to server';
        } else {
            return error.message || 'An unexpected error occurred';
        }
    }

    async get(url, contentType = 'application/json') {
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': contentType
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(this.getErrorMessage(error));
        }
    }

    async post(url, data, contentType = 'application/json') {
        try {
            const headers = {};

            if (!(data instanceof FormData)) {
                headers['Content-Type'] = contentType;
            }
            
            const response = await axios.post(url, data, {
                headers,
            });
            return response.data;
        } catch (error) {
            throw new Error(this.getErrorMessage(error));
        }
    }

    // async put(url, data, contentType = 'application/json') {
    //     try {
    //         const response = await axios.put(url, data, {
    //             headers: { 'Content-Type': contentType },
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw new Error(this.getErrorMessage(error));
    //     }
    // }

    async delete(url, contentType = 'application/json') {
        try {
            const response = await axios.delete(url, {
                headers: { 'Content-Type': contentType },
            });
            return response.data;
        } catch (error) {
            throw new Error(this.getErrorMessage(error));
        }
    }
}
