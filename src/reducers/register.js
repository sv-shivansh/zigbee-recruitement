/* eslint-disable import/no-anonymous-default-export */
import { REGISTERED_SUCCESSFULLY, ERROR } from "../actions/types"

const initialState = {
    loading: true,
    registration: true,
    error:{},
}

export default function (state = initialState, action){
    const { type, payload } = action
    switch(type){
        case REGISTERED_SUCCESSFULLY:
            return {
                ...state,
                registration: true,
                loading: false,
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}