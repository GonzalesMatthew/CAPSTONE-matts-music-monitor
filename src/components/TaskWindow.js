import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Paper } from '@material-ui/core';
import Task from './Task';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 8,
    marginBottom: 8,
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
    maxHeight: 380,
    overflow: 'auto',
  },
}));

export default function TaskWindow({
  ...rest
}) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        {rest.tasks.map((task) => (
          <Task
            key={task.firebaseKey}
            task={task}
            user={rest.user}
            setTasks={rest.setTasks}
          />
        ))}
      </Paper>
    </Container>
  );
}

TaskWindow.propTypes = {
  user: PropTypes.any,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
