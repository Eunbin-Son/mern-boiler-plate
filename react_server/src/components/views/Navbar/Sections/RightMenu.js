import { MenuOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import React from 'react'
import { useSelector } from "react-redux";
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

function RightMenu(props) {
    const user = useSelector(state => state.user)

    const logoutHandler = () => {
        Axios.get('/api/users/logout')
            .then(response => {
                if(response.data.logoutSuccess){
                    props.history.push('/login');
                }else{
                    alert('로그아웃을 실패하였습니다. 혹은 이미 로그아웃한 상태입니다.')
                }
            })
    }

    if (user.userData && !user.userData.isAuth) {
    return (
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
        )
    }else{
        return(
            <div className="menu__container">
                <div className="menu_right">
                    <Menu mode='horizontal' multiple='true' onclick={()=>{}}>
                        <Menu.Item  icon={<MenuOutlined/> }>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="menu_right">
                        <Button type='primary' href="/upload">+</Button>
                </div>
                <div className="menu_right">
                        <Button onClick={logoutHandler} href="#">log out</Button>
                </div>                
            </div>
        )
    }
}

export default withRouter(RightMenu)
