import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import images from '../helpers/images/images';
import { getTopic } from '../helpers/data/TopicData';
import { getInstrument } from '../helpers/data/InstrumentData';
import ModalContainer from './forms/ModalContainer';
import { deleteTask } from '../helpers/data/TaskData';
import { getTascam } from '../helpers/data/TascamData';
import { getMemo } from '../helpers/data/MemoData';

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
  const [tascam, setTascam] = useState([]);
  const [memo1, setMemo1] = useState({});
  const [memo2, setMemo2] = useState({});
  const [memo3, setMemo3] = useState({});

  // get topic, subTopic, and instrument names for updateForm
  useEffect(() => {
    getTopic(rest.task.topicId).then(setTopic);
    getTopic(rest.task.subTopicId).then(setSubTopic);
    getInstrument(rest.task.instrumentId).then(setInstrument);
    getTascam(rest.task.firebaseKey).then((resp) => {
      setTascam(resp);
      getMemo(resp[0].memoId1).then(setMemo1);
      getMemo(resp[0].memoId2).then(setMemo2);
      getMemo(resp[0].memoId3).then(setMemo3);
    });
  }, []);

  const [updateTaskModalStatus, setUpdateModalStatus] = useState(false);
  const toggleUpdateModal = () => {
    setUpdateModalStatus(!updateTaskModalStatus);
  };

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
        <Button color='dark' onClick={toggleUpdateModal}><img alt='view button' src={images.eyeIcon}/></Button>
        {/* delete button */}
        <Button color='dark' onClick={() => {
          // eslint-disable-next-line no-alert
          if (window.confirm('delete...?')) {
            deleteTask(rest.task.firebaseKey, tascam[0].firebaseKey, memo1.firebaseKey, memo2.firebaseKey, memo3.firebaseKey, rest.user.uid).then(rest.setTasks);
          }
        }
        }><img alt='delete button' src={images.xIcon}
        /></Button>
      </div>
      <ModalContainer
        id={rest.task.firebaseKey}
        user={rest.user}
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
        modalStatus={updateTaskModalStatus}
        modalToggle={toggleUpdateModal}
        tascam={tascam}
        memo1={memo1}
        memo2={memo2}
        memo3={memo3}
      />
    </Container>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  // following two live in task
  day: PropTypes.string,
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
