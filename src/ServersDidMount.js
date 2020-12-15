import React from 'react';
import { connect } from 'react-redux';
import Servers from './Servers.js';
import {setServers, getServersThunk} from '../reducers/mastersReducer.js';


class ServersDidMount extends React.Component{

     componentDidMount(){
        this.props.getServersThunk();
    }

    render(){
        return(
            <Servers Servers={this.props.Servers} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        servers: state.serversPage.servers
    }
}

export default connect( mapStateToProps, {setServers, getServersThunk} )(ServersDidMount);