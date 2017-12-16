/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  Button,
  Grid,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import DiagnosesModal from 'components/HomePage/DiagnosesModal';
import messages from './messages';
import reducer from './reducer';
import saga from './sagas';
// import * as actions from './actions';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      diagnosesModalOpen: false,
      addNewDiagnoseModalOpen: false,
    };

    this.toggleDiagnosesModal = ::this.toggleDiagnosesModal;
  }

  toggleModal(modal) {
    if (modal in this.state) {
      this.setState((state) => ({ [modal]: !state[modal] }));
    }
  }

  toggleDiagnosesModal() {
    this.toggleModal('diagnosesModalOpen');
  }

  render() {
    const { diagnosesModalOpen } = this.state;
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Button onClick={this.toggleDiagnosesModal}>
              <FormattedMessage {...messages.openDiagnosesButton} />
            </Button>
          </Col>
          <Col sm={12} md={6}>
            <DiagnosesModal
              show={diagnosesModalOpen}
              closeModal={this.toggleDiagnosesModal}
              toggleAddNewDiagnoseModal={() => this.toggleModal('addNewDiagnoseModalOpen')}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const withConnect = connect(null, null);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
