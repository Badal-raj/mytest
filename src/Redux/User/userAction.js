import axios from 'axios';

import {
    REGISTER_USER, 
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR
} from '../actions'

export const registerAction=(fields)=>async dispatch=>{
    const config={
        method: 'post',
        header:{
            'Content-Type': 'application/json'
        }
    }
    const body=JSON.stringify(fields)
    
    try {
         const res= await axios.post('http://localhost:4000/users/register', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res
        })
    } catch (error) {

        dispatch({
            type: REGISTER_ERROR,
            error
        })
        
    }
}