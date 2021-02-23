import React from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { Button, Space, Typography } from 'antd';
import  {CodeOutlined} from '@ant-design/icons';

function LandingPage(props) {

    const {Text} = Typography;

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
        <div>
            <div className="app">
                <Space direction="vertical" align="center">
                <CodeOutlined style={{fontSize:'5rem'}}/>
                <Text code style={{fontSize:'2rem'}}>Please Add Files</Text>
                <br />
                <Button onClick={logoutHandler} href="#">로그아웃</Button>
                </Space>
            </div>
        </div>
    )
}

export default withRouter(LandingPage) 
