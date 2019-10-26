import * as actionTypes from '../actions';

import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE}
from '../actions';

const initialState = {
  smurfs: [],
  getSmurfs: false,
  addSmurf: false,
  error: null
};

const smurfReducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        getSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        getSmurfs: false
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        getSmurfs: true
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        smurfs: action.payload,
        getSmurfs: false
      };
    case actionTypes.ERROR:
      return {
        ...state,
        getSmurfs: false,
        addSmurf: false,
      };
    default:
      return {
        ...state
      };
  }
}

export default smurfReducer;