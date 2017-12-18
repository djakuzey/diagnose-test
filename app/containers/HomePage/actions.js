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

function setErrorMessage(message) {
  return {
    type: actionTypes.SET_ERROR_MESSAGE,
    message,
  };
}

function createDiagnosisRequest(diagnosis) {
  return {
    type: actionTypes.CREATE_DIAGNOSIS_REQUEST,
    diagnosis,
  };
}

function createDiagnosisSuccess(diagnosis) {
  return {
    type: actionTypes.CREATE_DIAGNOSIS_SUCCESS,
    diagnosis,
  };
}

export {
  fetchDiagnosesRequest,
  fetchDiagnosesSuccess,
  setErrorMessage,
  createDiagnosisRequest,
  createDiagnosisSuccess,
};
