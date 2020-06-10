import { FETCH_DATA, UPDATE_FACT, SET_ERROR } from '../actions/index.js';

const initialState = {
    fact: '',
    isFetchingData: false,
    error: ''
}


export const factReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_FACT:
            return {
                ...state,
                fact: action.payload.text,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }
}