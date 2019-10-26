import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  ERROR
} from '../actions';
// imported action types

const initialState = {
  smurf: [],
  getSmurf: false,
  addSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        getSmurf: true,
        error: null
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        getSmurf: false
      };
    case GET_SMURF_FAIL:
      return {
        ...state,
        smurf: action.payload,
        getSmurf: false
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        getSmurf: true
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        smurf: action.payload,
        getSmurf: false
      };
    case ERROR:
      return {
        ...state,
        getSmurf: false,
        addSmurf: false,
      };
  };
};