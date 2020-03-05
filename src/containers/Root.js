import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import configureStore from '../configureStore'
import { BrowserRouter as Router, HashRouter, Route, Switch, Link } from 'react-router-dom'

import Dashboard from '../components/Dashboard'

// import { PrivateRoute } from '../functions'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>

                    <Dashboard/>
                    
                </HashRouter>
            </Provider>
        )
    }
}