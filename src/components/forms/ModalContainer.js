import React from 'react';
// import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import TaskForm from './TaskForm';

// const useStyles = makeStyles(() => ({
//   modal: {
//     backgroundColor: '#343A40',
//     borderRadius: 50,
//   }
// }));

const ModalContainer = ({ formName, modalStatus, toggle }) => (
  // const classes = useStyles();
    <Modal
      // dialogClassName={classes.modal}
      size='md'
      isOpen={modalStatus} toggle={toggle}
    >
      <ModalHeader toggle={toggle}>{formName}</ModalHeader>
      <ModalBody>
        <TaskForm/>
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
  formName: PropTypes.string,
  modalStatus: PropTypes.bool,
  toggle: PropTypes.func
};