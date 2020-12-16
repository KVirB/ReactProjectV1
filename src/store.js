import {applyMiddleware, combineReducers, createStore} from 'redux';
import serversReducer from './reducers/serversReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({ 
      serversPage: serversReducer
    });

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;