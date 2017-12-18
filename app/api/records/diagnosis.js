import { Record } from 'immutable';

const Diagnosis = new Record({
  id: undefined,
  date: null,
  actuaryInfo: '',
  diagnosis: '',
  diagnoseType: '',
  notice: '',
});

export default Diagnosis;
