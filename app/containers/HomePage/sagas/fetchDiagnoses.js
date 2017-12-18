import { call, put } from 'redux-saga/effects';
import { List } from 'immutable';
import Api from 'api/api';
import Diagnosis from 'api/records/diagnosis';

import { fetchDiagnosesSuccess, setErrorMessage } from '../actions';

export default function* fetchDiagnoses() {
  try {
    const response = yield call(Api.get, '/diagnoses?expand=author');
    const diagnoses = new List(response.map((diagnosis) => new Diagnosis(diagnosis)));

    yield put(fetchDiagnosesSuccess(diagnoses));
  } catch (error) {
    yield put(setErrorMessage(error));
  }
}
