import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Paper } from '@material-ui/core';
import Task from './Task';
// import { Button } from 'reactstrap';
// import images from '../helpers/images/images';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#D1CBC1',
    // color: '#C9D1D9'
  },
  task: {
  }
}));

export default function TaskWindow() {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper} elevation={6}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </Paper>
    </Container>
  );
}

TaskWindow.propTypes = {
  tasks: PropTypes.array
};
