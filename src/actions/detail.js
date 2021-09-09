import axios from "axios"
import { setAlert } from './alert';
import { REGISTERED_SUCCESSFULLY, ERROR } from "./types";

export const register = ({name, email, semester, branch, usn, rating,feedback, suggestion}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, semester, branch, usn, rating,feedback, suggestion})
    try{
        const res = await axios.post('/api/register', body, config)
        dispatch({
            type: REGISTERED_SUCCESSFULLY,
            payload: res.data
        })
        dispatch(setAlert("Response Recorded Successfully", 'success'))
    }catch(error){
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
        dispatch(setAlert(error.response.statusText, 'danger'))
    }
}

