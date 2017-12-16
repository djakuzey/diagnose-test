import * as actionTypes from './constants';

function fetchDiagnosesRequest() {
  return {
    type: actionTypes.FETCH_DIAGNOSES_REQUEST,
  };
}

function fetchDiagnosesSuccess(diagnoses) {
  return {
    type: actionTypes.FETCH_DIAGNOSES_SUCCESS,
    diagnoses,
  };
}

function fetchDiagnosesError(message) {
  return {
    type: actionTypes.FETCH_DIAGNOSES_ERROR,
    message,
  };
}

export {
  fetchDiagnosesRequest,
  fetchDiagnosesSuccess,
  fetchDiagnosesError,
};
