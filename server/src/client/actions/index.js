import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
// make sure to use 'babel-polyfill' in
// server and client js, because 'async await' Babel 
// asumes there is a regenerator runtime defined 
export const fetchUsers = () => async dispatch  => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users')

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
};