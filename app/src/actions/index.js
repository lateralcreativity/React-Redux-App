import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_FACT = "UPDATE_FACT";
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios.get(`https://cat-fact.herokuapp.com/facts/random`)
    .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_FACT, payload: res.data })
    })
    .catch(err => {
        console.log('Error', err)
        dispatch({ type: SET_ERROR, payload: 'Error fetching data from API'})
    })
};