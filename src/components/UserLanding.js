import React from 'react';
import styled from 'styled-components';
import {
  makeStyles, Avatar, Paper, Typography, Container
} from '@material-ui/core';
// import { Button } from 'reactstrap';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import PropTypes from 'prop-types';
// import ModalContainer from './forms/ModalContainer';

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
  user, modalStatus, setModalStatus
}) {
  const classes = useStyles();
  const toggle = () => setModalStatus(!modalStatus);
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
          <div className='d-flex flex-column'>
            <Div>
              <Typography gutterBottom variant='subtitle1'>
                Welcome, {user.fullName}...
              </Typography>
            </Div>
            <Div>
              <Button color='dark' onClick={toggle}>
                addTask...
              </Button>
              <Modal isOpen={modalStatus} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum for nest modal.
                  <br />
                  {/* <Button color="success" onClick={toggleNested}>Show Nested Modal</Button> */}
                  {/* <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                    <ModalHeader>Nested Modal title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                      <Button color="secondary" onClick={toggleAll}>All Done</Button>
                    </ModalFooter>
                  </Modal> */}
                </ModalBody>
                <ModalFooter>
                  <Button color="dark" onClick={toggle}>Submit...</Button>{' '}
                  <Button color="dark" onClick={toggle}>Cancel...</Button>
                </ModalFooter>
              </Modal>
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
  setModalStatus: PropTypes.func
};
