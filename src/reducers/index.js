import { combineReducers } from 'redux'
import register from './register'
import alert from './alert'

export default combineReducers({
    register,
    alert
});