import React from 'react';
import Axios from 'axios';
//import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom";

function LandingPage(props) {

    //let user = useSelector(state => state.user);
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
            <h2>Landing Page</h2>
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(LandingPage) 
