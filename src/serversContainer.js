import React from 'react';
import { connect } from 'react-redux';
import {setServers, getServersThunk} from './reducers/serversReducer';
import Servers from './Servers.js';


class ServersContainer extends React.Component{

     componentDidMount(){
        this.props.getServersThunk();
    }

    render(){
        return(
            <Servers servers={this.props.servers} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        servers: state.serversPage.servers
    }
}

export default connect( mapStateToProps, {setServers, getServersThunk} )(ServersContainer);