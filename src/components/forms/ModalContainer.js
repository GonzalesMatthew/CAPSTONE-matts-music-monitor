import React from 'react';
// import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader,
  // Button, ModalFooter
} from 'reactstrap';
import TaskForm from './TaskForm';

// const useStyles = makeStyles(() => ({
//   modal: {
//     backgroundColor: '#343A40',
//     borderRadius: 50,
//   }
// }));

const ModalContainer = ({
  task, user, formName, setTasks, modalStatus, modalToggle
}) => (
  // const classes = useStyles();
    <Modal
      // dialogClassName={classes.modal}
      size='md'
      isOpen={modalStatus} toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>{formName}</ModalHeader>
      <ModalBody>
        <TaskForm
          task={task}
          user={user}
          setTasks={setTasks}
          modalToggle={modalToggle}
        />
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
      {/* <ModalFooter>
        <Button type='submit'color="dark">Submit...</Button>
        <Button color="dark" onClick={modalToggle}>Cancel...</Button>
      </ModalFooter> */}
    </Modal>
);

export default ModalContainer;

ModalContainer.propTypes = {
  task: PropTypes.object,
  formName: PropTypes.string,
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
  setTasks: PropTypes.func,
  user: PropTypes.any
};
