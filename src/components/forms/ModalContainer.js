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
  id, user, formName, setTasks, modalStatus, modalToggle, tascam, memo1, memo2, memo3, ...rest
}) => (
  // const classes = useStyles();
    <Modal
      id={id}
      // dialogClassName={classes.modal}
      size='md'
      isOpen={modalStatus} toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>{formName}</ModalHeader>
      <ModalBody>
        <TaskForm
          user={user}
          setTasks={setTasks}
          modalToggle={modalToggle}
          // task fields:
          day={rest.day}
          description={rest.description}
          duration={rest.duration}
          firebaseKey={rest.firebaseKey}
          instrumentId={rest.instrumentId}
          reviewNotes={rest.reviewNotes}
          subTopicId={rest.subTopicId}
          topicId={rest.topicId}
          // tascam fields:
          tascam={tascam}
          // memo fields:
          memo1={memo1}
          memo2={memo2}
          memo3={memo3}
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
  id: PropTypes.string,
  formName: PropTypes.string,
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
  tascam: PropTypes.array,
  memo1: PropTypes.object,
  memo2: PropTypes.object,
  memo3: PropTypes.object,
  setTasks: PropTypes.func,
  user: PropTypes.any,
  day: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  firebaseKey: PropTypes.string,
  instrumentId: PropTypes.string,
  reviewNotes: PropTypes.string,
  subTopicId: PropTypes.string,
  topicId: PropTypes.string,
};
