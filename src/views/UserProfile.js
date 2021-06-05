import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  makeStyles, Avatar, Paper, Typography, Container
} from '@material-ui/core';
import { Button } from 'reactstrap';

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

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function UserProfile({ user }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Paper className={classes.paper} elevation={6}>
          <div className='d-flex flex-row'>
            <div>
              <Avatar
                alt={`image of ${user.fullName}`}
                src={user.profileImage}
                className={classes.large}
              />
            </div>
            <div className='d-flex flex-column'>
              <Div>
                <Typography gutterBottom variant='subtitle1'>
                  Welcome, {user.fullName}...
                </Typography>
              </Div>
              <Div>
                <Button color='dark'>
                  addTask...
                </Button>
              </Div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any
};
