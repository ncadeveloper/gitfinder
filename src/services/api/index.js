import axios from 'axios';
export class Api {

    constructor(url, method, data = null) {
        this._url = url;
        this._method = method;
        this._data = data;
        this._axios = axios.create({
            timeout: 9000,
            baseURL: process.env.REACT_APP_API_URL
        });
    }

    exec() {
        return this._axios({
            method: this._method,
            url: this._url,
            data: this._data
        });
    }

}