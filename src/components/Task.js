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
    getTopic(rest.topicId).then(setTopic);
    getTopic(rest.subTopicId).then(setSubTopic);
    getInstrument(rest.instrumentId).then(setInstrument);
  }, []);

  // const handleClick = (type) => {
  //   switch (type) {
  //     case 'delete':
  //       deleteTask(firebaseKey)
  //         .then(setTasks);
  //       break;
  //     case 'view':
  //       updateTask((prevState) => !prevState);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <Container className={classes.task}>
      <div className='d-flex flex-row'>
        <Button color='dark' className='flex-grow-1'>
          {topic.topic}: {subTopic.topic}
        </Button>
        {/* <Button color='dark'>
          {instrument.instrument}
        </Button> */}
        <Button color='dark'>
          <img className={classes.image} alt={`Icon image of ${instrument.instrument}`} src={instrument.instrumentIcon}/>
        </Button>
        {/* view/edit button */}
        <Button color='dark' onClick={rest.modalToggle}><img alt='view button' src={images.eyeIcon}/></Button>
        {/* delete button */}
        <Button color='dark' onClick={() => deleteTask(rest.firebaseKey, rest.user.uid).then(rest.setTasks)}><img alt='delete button' src={images.xIcon}/></Button>
      </div>
      <ModalContainer user={rest.user} formName={'updateTask...'} setTasks={rest.setTasks} modalStatus={rest.modalStatus} modalToggle={rest.modalToggle}/>
    </Container>
  );
}

Task.propTypes = {
  day: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  firebaseKey: PropTypes.string,
  instrumentId: PropTypes.string,
  reviewNotes: PropTypes.string,
  subTopicId: PropTypes.string,
  topicId: PropTypes.string,
  user: PropTypes.any,
  modalStatus: PropTypes.bool,
  setModalStatus: PropTypes.func,
  setTasks: PropTypes.func,
  modalToggle: PropTypes.func,
};
