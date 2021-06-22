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
          // task data
          day={rest.day}
          description={rest.description}
          duration={rest.duration}
          firebaseKey={rest.firebaseKey}
          instrumentId={rest.instrumentId}
          reviewNotes={rest.reviewNotes}
          subTopicId={rest.subTopicId}
          topicId={rest.topicId}
          // tascam data
          tascam={tascam}
          memo1={memo1}
          memo2={memo2}
          memo3={memo3}
        />
        <br />
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
  // user, setTasks
  user: PropTypes.any,
  setTasks: PropTypes.func,
  //  task data
  day: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  firebaseKey: PropTypes.string,
  instrumentId: PropTypes.string,
  reviewNotes: PropTypes.string,
  subTopicId: PropTypes.string,
  topicId: PropTypes.string,
  // tascam data
  tascam: PropTypes.array,
  memo1: PropTypes.object,
  memo2: PropTypes.object,
  memo3: PropTypes.object,
  // modal toggle
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
};
