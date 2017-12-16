import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Modal, Button } from 'react-bootstrap';

import messages from './messages';

export default class DiagnosesModal extends React.PureComponent {

  static propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func,
    // toggleAddNewDiagnoseModal: PropTypes.func,
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
