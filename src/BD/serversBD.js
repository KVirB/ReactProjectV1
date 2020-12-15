import * as axios from 'axios';

const baseRout = axios.create({
    baseURL: "http://127.0.0.1:3030/BD/"
    }
)

export const getServers = () => {
    return baseRout.get("servers").then(response => {return response.data})
}