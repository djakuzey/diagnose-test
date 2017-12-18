import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  Modal,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import Diagnosis from 'api/records/diagnosis';
import messages from './messages';

class CreateDiagnosisModal extends React.PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func,
    createDiagnosis: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.createDiagnosis = ::this.createDiagnosis;
  }

  createDiagnosis() {
    const date = this.dateInput.value;
    const diagnose = this.diagnoseInput.value.trim();
    const notes = this.notesInput.value.trim();

    const diagnosis = new Diagnosis({
      date,
      diagnosis: diagnose,
      notice: notes,
    });

    this.props.createDiagnosis(diagnosis);
    this.props.closeModal();
  }

  render() {
    const { show } = this.props;

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            <FormattedMessage {...messages.modalTitle} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Date of a diagnose</ControlLabel>
            <FormControl type="date" inputRef={(ref) => { this.dateInput = ref; }} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Diagnose</ControlLabel>
            <FormControl type="text" inputRef={(ref) => { this.diagnoseInput = ref; }} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Notes</ControlLabel>
            <FormControl componentClass="textarea" inputRef={(ref) => { this.notesInput = ref; }} />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>
            <FormattedMessage {...messages.closeModal} />
          </Button>
          <Button onClick={this.createDiagnosis}>
            <FormattedMessage {...messages.saveModal} />
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateDiagnosisModal;
