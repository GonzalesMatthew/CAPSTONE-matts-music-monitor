import React from 'react';
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
  },
}));

export default function UserProfile({ user }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Paper>
          <div className='d-flex flex-row'>
            <div>
              <Avatar
                alt={`image of ${user.fullName}`}
                src={user.profileImage}
                className={classes.large}
              />
            </div>
            <div className='d-flex flex-column'>
              <div>
                <Typography gutterBottom variant='subtitle1'>
                  Welcome, {user.fullName}...
                </Typography>
              </div>
              <div>
                <Button color='dark'>
                  addTask...
                </Button>
              </div>
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
