import { Map, List } from 'immutable';

import {
  FETCH_DIAGNOSES_REQUEST,
  FETCH_DIAGNOSES_SUCCESS,
  FETCH_DIAGNOSES_ERROR,
} from './constants';

const initialState = new Map({
  diagnoses: new List(),
  error: null,
  loading: true,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DIAGNOSES_REQUEST:
      return state.set('loading', true);

    case FETCH_DIAGNOSES_SUCCESS:
      return state.set('diagnoses', action.diagnoses);

    case FETCH_DIAGNOSES_ERROR:
      return state.set('error', action.message);

    default:
      return state;
  }
}

export default homeReducer;
