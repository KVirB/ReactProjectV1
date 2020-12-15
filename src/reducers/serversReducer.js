import { getServers } from '../BD/serversBD';

const SET_SERVERS = 'SET_SERVERS';

let initialState = { 
    servers: []
};


const serversReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SERVERS:
           return {...state, servers: [...state.servers, ...action.servers]}
        default:
            return state;
    }

}

export const setServers = (servers) => ({type:SET_SERVERS, servers})

export const getServersThunk = () => {
    return (dispatch) => {
    getServers().then(data => 
        { 
            dispatch(setServers(data));
        }
    );
    }
}

export default serversReducer;