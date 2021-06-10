import React from 'react';
import styled from 'styled-components';
import {
  makeStyles, Avatar, Paper, Typography, Container
} from '@material-ui/core';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
// import ModalContainer from './forms/ModalContainer';
import TaskForm from './forms/TaskForm';

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
export default function UserLanding({
  user, modalStatus, setModalStatus, setTasks
}) {
  const classes = useStyles();
  const modalToggle = () => setModalStatus(!modalStatus);
  return (
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
          <div className='d-flex flex-column flex-grow-1'>
            <Div>
              <Typography gutterBottom variant='subtitle1'>
                Welcome, {user.fullName}...
              </Typography>
            </Div>
            <Div>
              <Button color='dark' onClick={modalToggle}>
                addTask...
              </Button>
              {/* modalStatus used as placeholder right now for form visibility */}
              { modalStatus === true
                && <TaskForm user={user} formName={'addTask...'} setTasks={setTasks} modalStatus={modalStatus} setModalStatus={setModalStatus}/>
              }
              {/* my modal component is here: ModalContainer */}
              {/* modal part of stretch goals */}
              {/* <ModalContainer user={user} formName={'addTask...'} setTasks={setTasks} modalStatus={modalStatus} modalToggle={modalToggle}/> */}
            </Div>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

UserLanding.propTypes = {
  user: PropTypes.any.isRequired,
  modalStatus: PropTypes.bool,
  setModalStatus: PropTypes.func,
  setTasks: PropTypes.func
};
