import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import images from '../helpers/images/images';

const useStyles = makeStyles(() => ({
  task: {
    backgroundColor: '#343A40'
  }
}));
export default function Task({ ...rest }) {
  const classes = useStyles();
  return (
    <Container className={classes.task}>
      <div className='d-flex flex-row'>
        <Button color='dark'>
          {rest.topicId} {rest.subTopicId}
        </Button>
        <Button color='dark'>
          {rest.instrumentId}
        </Button>
        <Button color='dark'><img alt='view button' src={images.eyeIcon}/></Button>
        <Button color='dark'><img alt='delete button' src={images.xIcon}/></Button>
      </div>
    </Container>
  );
}

Task.propTypes = {
  description: PropTypes.description,
  duration: PropTypes.duration,
  firebaseKey: PropTypes.firebaseKey,
  instrumentId: PropTypes.instrumentId,
  reviewNotes: PropTypes.reviewNotes,
  subTopicId: PropTypes.subTopicId,
  topicId: PropTypes.topicId,
  uid: PropTypes.uid,
};
