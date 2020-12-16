import * as axios from 'axios';
debugger;
const baseRout = axios.create({
    baseURL: "http://127.0.0.1:3001/api/"
    }
)

export const getServers = () => {
    return baseRout.get("servers").then(response => {return response.data})
}