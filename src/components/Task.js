// import React from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import images from '../helpers/images/images';
import { getTopic } from '../helpers/data/TopicData';
import { getInstrument } from '../helpers/data/InstrumentData';

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
  const [topic, setTopic] = useState([]);
  const [subTopic, setSubTopic] = useState([]);
  const [instrument, setInstrument] = useState([]);
  useEffect(() => {
    getTopic(rest.topicId).then(setTopic);
  }, []);
  useEffect(() => {
    getTopic(rest.subTopicId).then(setSubTopic);
  }, []);
  useEffect(() => {
    getInstrument(rest.instrumentId).then(setInstrument);
  }, []);
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
        <Button color='dark'><img alt='view button' src={images.eyeIcon}/></Button>
        <Button color='dark'><img alt='delete button' src={images.xIcon}/></Button>
      </div>
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
  uid: PropTypes.any,
  modalStatus: PropTypes.bool,
  setModalStatus: PropTypes.func
};
