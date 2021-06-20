import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles, Container, Paper } from '@material-ui/core';
import { signInUser } from '../helpers/auth';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  `;
const Div2 = styled.div`
  margin: auto;
  height: 100;
  flex-grow: 3;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: '#D1CBC1',
  },
}));
// background-image: url(https://images.vectorhq.com/images/previews/a51/stage-lighting-psd-439877.png);
  // background-repeat: no-repeat;
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Paper className={classes.paper} elevation={6}>
          <Div>
            <Div2>
              <h5>musicMonitorApp...</h5>
            </Div2>
            <Div2>
              <Link className='btn btn-dark' onClick={signInUser} to='/user'>logOn...</Link>
            </Div2>
          </Div>
        </Paper>
      </Container>
    </>
  );
}
