import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import { Button, DatePicker, notification, Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css';

import MyRoutes from '../MyRoutes'


const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Layout className="layout wrap">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/dashboard">Dashboard</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 5px' }}>
                        
                        <div style={{ background: '#fff', padding: 5, minHeight: 500 }}>
                            <MyRoutes/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        );
    }
}

export default Dashboard;