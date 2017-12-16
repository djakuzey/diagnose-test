import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectDiagnoses = () => createSelector(
  selectHome,
  (homeState) => homeState.get('diagnoses')
);

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  makeSelectDiagnoses,
  makeSelectLoading,
  makeSelectError,
};
