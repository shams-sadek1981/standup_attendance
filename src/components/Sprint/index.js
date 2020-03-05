import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, DatePicker, notification, Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


import './style.less'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";



import {
    changeName,
} from '../../actions/todoActions'


const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

class Sprint extends Component {

    state = {
        name: 'Shams Sadek'
    }
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    myAddress = () => {
        return <h2>Mirpur DOHS</h2>
    }

    render() {

        const { dispatch, sprint } = this.props


        return (
            <div id="sprint">
                
                <h1>My Sprint</h1>
                <Button type="primary">Primary</Button>
                <DatePicker />

                <Button type="primary" onClick={openNotification}>
                    Open the notification box
                </Button>
                <button onClick={() => dispatch(changeName('Mishu'))}>Click Me</button>
                <h2>{this.props.todo.name}</h2>
                <h2>My Name {this.state.name }</h2>
                <h2>My Address { this.myAddress()}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todoReducer
})


// const WrappedComponent = Form.create({ name: 'sprint' })(Sprint);

export default withRouter(connect(mapStateToProps)(Sprint));