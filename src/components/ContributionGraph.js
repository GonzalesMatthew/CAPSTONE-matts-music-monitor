import React from 'react';
import { makeStyles, Container, Paper } from '@material-ui/core';

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
}));
export default function ContributionGraph() {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper} elevation={6}>
        Graph goes here :)
      </Paper>
    </Container>
  );
}