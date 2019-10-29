import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_FAILURE';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const ERROR = 'ERROR';
// action types


export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GET_SMURFS_START })
  
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({
        type: GET_SMURFS_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_SMURFS_FAILURE,
        payload: error
      })
    })
  }

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START});
  
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error});
      return false
    })
}