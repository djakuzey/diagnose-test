import { call, put } from 'redux-saga/effects';
import Api from 'api/api';
import Diagnosis from 'api/records/diagnosis';

import { createDiagnosisSuccess, setErrorMessage } from '../actions';

export default function* createDiagnosis(action) {
  try {
    const response = yield call(Api.post, '/diagnoses', action.diagnosis.toJS());

    yield put(createDiagnosisSuccess(new Diagnosis(response)));
  } catch (error) {
    yield put(setErrorMessage(error.message));
  }
}
