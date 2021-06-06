// import React from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import images from '../helpers/images/images';
import getTopic from '../helpers/data/TopicData';

const useStyles = makeStyles(() => ({
  task: {
    backgroundColor: '#343A40'
  }
}));
export default function Task({ ...rest }) {
  const classes = useStyles();
  const [topic, setTopic] = useState([]);
  const [subTopic, setSubTopic] = useState([]);
  useEffect(() => {
    getTopic(rest.topicId).then(setTopic);
    getTopic(rest.subTopicId).then(setSubTopic);
  }, []);
  return (
    <Container className={classes.task}>
      <div className='d-flex flex-row'>
        <Button color='dark'>
          {topic.topic}: {subTopic.topic}
        </Button>
        <Button color='dark'>
          {/* {rest.instrumentId} */}
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
};
