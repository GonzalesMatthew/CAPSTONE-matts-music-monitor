import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

const ModalContainer = ({ modalStatus, toggle }) => (
    <Modal isOpen={modalStatus} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum for nest modal.
        <br />
        {/* <Button color="success" onClick={toggleNested}>Show Nested Modal</Button> */}
        {/* <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
          <ModalHeader>Nested Modal title</ModalHeader>
          <ModalBody>Stuff and things</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
            <Button color="secondary" onClick={toggleAll}>All Done</Button>
          </ModalFooter>
        </Modal> */}
      </ModalBody>
      <ModalFooter>
        <Button color="dark" onClick={toggle}>Submit...</Button>{' '}
        <Button color="dark" onClick={toggle}>Cancel...</Button>
      </ModalFooter>
    </Modal>
);

export default ModalContainer;

ModalContainer.propTypes = {
  modalStatus: PropTypes.bool,
  toggle: PropTypes.func
};
