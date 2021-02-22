import { Menu, Button } from 'antd';
import React from 'react';
import './Navbar.css';
import { MenuOutlined } from '@ant-design/icons';

function Navbar() {
    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div className="menu__home">
                <a href="/">Home</a>
            </div>
            <div className="menu__container">
                <div className="menu_right">
                    <Menu mode='horizontal' multiple='true' onclick={()=>{}}>
                        <Menu.Item  icon={<MenuOutlined/> }>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="menu_right">
                        <Button type='primary' href="/register">sign up</Button>
                </div>
                <div className="menu_right">
                        <Button href="/login">log in</Button>
                </div>
                
            </div>
        </nav>
    )
}

export default Navbar
