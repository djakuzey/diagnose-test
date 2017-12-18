import { Map, List } from 'immutable';

import {
  FETCH_DIAGNOSES_REQUEST,
  FETCH_DIAGNOSES_SUCCESS,
  SET_ERROR_MESSAGE,
  CREATE_DIAGNOSIS_SUCCESS,
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

    case SET_ERROR_MESSAGE:
      return state.set('error', action.message);

    case CREATE_DIAGNOSIS_SUCCESS:
      return state.update('diagnoses', (diagnoses) => diagnoses.push(action.diagnosis));

    default:
      return state;
  }
}

export default homeReducer;
