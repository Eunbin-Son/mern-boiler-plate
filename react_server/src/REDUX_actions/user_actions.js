import Axios from 'axios';

import {
    LOGIN_USER,
    REGISTER_USER,

} from './types';


export function registerUser(dataToSubmit){
    const request = Axios.post(`/api/users/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(datatoSubmit) {
    const request = Axios.post('/api/users/login', datatoSubmit)
        .then(response => response.data )

    return {
        type: LOGIN_USER,
        payload: request
    }
}