import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import images from '../helpers/images/images';
import { getTopic } from '../helpers/data/TopicData';
import { getInstrument } from '../helpers/data/InstrumentData';
import ModalContainer from './forms/ModalContainer';
import { deleteTask } from '../helpers/data/TaskData';

const useStyles = makeStyles(() => ({
  task: {
    backgroundColor: '#343A40'
  },
  image: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
}));
export default function Task({ ...rest }) {
  const classes = useStyles();

  // get topic, subTopic, and instrument names for updateForm
  const [topic, setTopic] = useState([]);
  const [subTopic, setSubTopic] = useState([]);
  const [instrument, setInstrument] = useState([]);

  // get topic, subTopic, and instrument names for updateForm
  useEffect(() => {
    getTopic(rest.task.topicId).then(setTopic);
    getTopic(rest.task.subTopicId).then(setSubTopic);
    getInstrument(rest.task.instrumentId).then(setInstrument);
  }, []);

  return (
    <Container className={classes.task}>
      <div className='d-flex flex-row'>
        <Button color='dark' className='flex-grow-1'>
          {topic.topic}: {subTopic.topic}
        </Button>
        {/* instrument button */}
        {/* <Button color='dark'>
          {instrument.instrument}
        </Button> */}
        <Button color='dark'>
          <img className={classes.image} alt={`Icon image of ${instrument.instrument}`} src={instrument.instrumentIcon}/>
        </Button>
        {/* view/edit button */}
        <Button color='dark' onClick={rest.modalToggle}><img alt='view button' src={images.eyeIcon}/></Button>
        {/* delete button */}
        <Button color='dark' onClick={() => {
          // eslint-disable-next-line no-alert
          if (window.confirm('delete...?')) {
            deleteTask(rest.task.firebaseKey, rest.user.uid).then(rest.setTasks);
          }
        }
        }><img alt='delete button' src={images.xIcon}
        /></Button>
      </div>
      <ModalContainer
        user={rest.user}
        task={rest.task}
        day={rest.task.day}
        description={rest.task.description}
        duration={rest.task.duration}
        firebaseKey={rest.task.firebaseKey}
        instrumentId={rest.task.instrumentId}
        reviewNotes={rest.task.reviewNotes}
        subTopicId={rest.task.subTopicId}
        topicId={rest.task.topicId}
        formName={'updateTask...'}
        setTasks={rest.setTasks}
        modalStatus={rest.modalStatus}
        modalToggle={rest.modalToggle}
      />
    </Container>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  // following two live in task
  day: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  duration: PropTypes.number,
  firebaseKey: PropTypes.string,
  instrumentId: PropTypes.string,
  reviewNotes: PropTypes.string,
  subTopicId: PropTypes.string,
  topicId: PropTypes.string,

  user: PropTypes.any,
  setTasks: PropTypes.func,
  modalStatus: PropTypes.bool,
  setModalStatus: PropTypes.func,
  modalToggle: PropTypes.func,
};
