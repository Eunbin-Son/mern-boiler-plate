import React from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";
import { Button, Space, Typography } from 'antd';
import  {CodeOutlined} from '@ant-design/icons';

function LandingPage(props) {

    const {Text} = Typography;

    return (
        <div>
            <div className="app">
                <Space direction="vertical" align="center">
                    <CodeOutlined style={{fontSize:'5rem'}}/>
                    <Text code style={{fontSize:'2rem'}}>Please Add Files</Text>
                </Space>
            </div>
        </div>
    )
}

export default withRouter(LandingPage) 
