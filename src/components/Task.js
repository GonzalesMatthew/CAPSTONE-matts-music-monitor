import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles, Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import images from '../helpers/images/images';

const useStyles = makeStyles(() => ({
  task: {
    backgroundColor: '#343A40'
  }
}));
export default function Task() {
  const classes = useStyles();
  return (
    <Container className={classes.task}>
      <div className='d-flex flex-row'>
        <Button color='dark'>
          TaskName
        </Button>
        <Button color='dark'>
          InstrumentIcon
        </Button>
        <Button color='dark'><img alt='view button' src={images.eyeIcon}/></Button>
        <Button color='dark'><img alt='delete button' src={images.xIcon}/></Button>
      </div>
    </Container>
  );
}
