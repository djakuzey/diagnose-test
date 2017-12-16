import { takeEvery, take, cancel } from 'redux-saga/effects';

import {
  FETCH_DIAGNOSES_REQUEST,
} from '../constants';

import fetchDiagnoses from './fetchDiagnoses';

export default function* homeSaga() {
  const fetchDiagnosesWatcher = yield takeEvery(FETCH_DIAGNOSES_REQUEST, fetchDiagnoses);

  yield take('@@router/LOCATION_CHANGE');

  yield cancel(fetchDiagnosesWatcher);
}
