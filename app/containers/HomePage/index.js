import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  Button,
  Grid,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { List } from 'immutable';

import DiagnosesModal from 'components/HomePage/DiagnosesModal';
import CreateDiagnosisModal from 'components/HomePage/CreateDiagnosisModal';
import messages from './messages';
import reducer from './reducer';
import saga from './sagas';
import * as selectors from './selectors';
import { fetchDiagnosesRequest, createDiagnosisRequest } from './actions';


class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    fetchDiagnosesRequest: PropTypes.func,
    createDiagnosisRequest: PropTypes.func,
    diagnoses: PropTypes.instanceOf(List),
  }

  constructor(props) {
    super(props);

    this.state = {
      diagnosesModalOpen: false,
      createDiagnosisModalOpen: false,
    };

    this.toggleDiagnosesModal = ::this.toggleDiagnosesModal;
    this.toggleCreateDiagnosisModal = ::this.toggleCreateDiagnosisModal;
  }

  componentDidMount() {
    this.props.fetchDiagnosesRequest();
  }

  toggleModal(modal) {
    if (modal in this.state) {
      this.setState((state) => ({ [modal]: !state[modal] }));
    }
  }

  toggleDiagnosesModal() {
    this.toggleModal('diagnosesModalOpen');
  }

  toggleCreateDiagnosisModal() {
    this.toggleModal('createDiagnosisModalOpen');
  }

  render() {
    const { diagnosesModalOpen, createDiagnosisModalOpen } = this.state;
    const { diagnoses } = this.props;

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
              diagnoses={diagnoses}
              show={diagnosesModalOpen}
              closeModal={this.toggleDiagnosesModal}
              toggleCreateDiagnosisModal={this.toggleCreateDiagnosisModal}
            />
            <CreateDiagnosisModal
              show={createDiagnosisModalOpen}
              closeModal={this.toggleCreateDiagnosisModal}
              createDiagnosis={this.props.createDiagnosisRequest}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  diagnoses: selectors.makeSelectDiagnoses(),
  error: selectors.makeSelectError(),
  loading: selectors.makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDiagnosesRequest,
    createDiagnosisRequest,
  }, dispatch);
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
