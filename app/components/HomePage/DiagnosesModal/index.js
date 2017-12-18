import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Modal,
  Button,
  Table,
} from 'react-bootstrap';
import { List } from 'immutable';

import messages from './messages';

class DiagnosesModal extends React.PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func,
    toggleCreateDiagnosisModal: PropTypes.func,
    diagnoses: PropTypes.instanceOf(List),
  }

  render() {
    const { show, diagnoses } = this.props;

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <FormattedMessage {...messages.modalTitle} />
          </Modal.Title>
          <Button onClick={this.props.toggleCreateDiagnosisModal}>
            <FormattedMessage {...messages.addDiagnosis} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Diagnose</th>
                <th>Type</th>
                <th>Notes</th>
                <th>Actuary</th>
              </tr>
            </thead>
            <tbody>
              {diagnoses.map((diagnosis, index) => (
                <tr key={diagnosis.get('id') || `${diagnosis.get('date')}-${index}`}>
                  <td>{diagnosis.get('date')}</td>
                  <td>{diagnosis.get('diagnosis')}</td>
                  <td>{diagnosis.get('diagnoseType')}</td>
                  <td>{diagnosis.get('notice')}</td>
                  <td>{diagnosis.get('actuaryInfo')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>
            <FormattedMessage {...messages.closeModal} />
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DiagnosesModal;
