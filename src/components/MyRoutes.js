import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import Sprint from '../components/Sprint'

class MyRoutes extends Component {
    render() {
        return (
            <div>
                <Route path="/dashboard" component={Sprint}/>
            </div>
        );
    }
}

export default MyRoutes;