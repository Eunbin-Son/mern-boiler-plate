import React from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { Button } from 'antd';

function LandingPage(props) {

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

    return (
            <div style={{position: 'absolute', bottom: '50%',  top: '50%', left:'50%',  right: '50%'}}>
                <br />
                <h2>Landing Page</h2>
                <Button onClick={logoutHandler} href="#">로그아웃</Button>
            </div>
    )
}

export default withRouter(LandingPage) 
