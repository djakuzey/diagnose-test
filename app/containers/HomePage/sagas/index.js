import { takeEvery, take, cancel } from 'redux-saga/effects';

import {
  FETCH_DIAGNOSES_REQUEST,
  CREATE_DIAGNOSIS_REQUEST,
} from '../constants';

import fetchDiagnoses from './fetchDiagnoses';
import createDiagnosis from './createDiagnosis';

export default function* homeSaga() {
  const fetchDiagnosesWatcher = yield takeEvery(FETCH_DIAGNOSES_REQUEST, fetchDiagnoses);
  const createDiagnosisWatcher = yield takeEvery(CREATE_DIAGNOSIS_REQUEST, createDiagnosis);

  yield take('@@router/LOCATION_CHANGE');

  yield cancel(fetchDiagnosesWatcher);
  yield cancel(createDiagnosisWatcher);
}
