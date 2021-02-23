import { Menu, Button } from 'antd';
import React from 'react';
import './Navbar.css';

import { MenuOutlined } from '@ant-design/icons';
import RightMenu from './Sections/RightMenu'

function Navbar() {
    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
            <div className="menu__home">
                <a href="/">Home</a>
            </div>
            <RightMenu/>
        </nav>
    )
}

export default Navbar
