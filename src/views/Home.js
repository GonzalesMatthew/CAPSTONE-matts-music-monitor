import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signInUser } from '../helpers/auth';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: url(https://images.vectorhq.com/images/previews/a51/stage-lighting-psd-439877.png);
  // background-repeat: no-repeat;
`;

export default function Home() {
  return (
    <>
      <Div>
        Matts Music Monitor App...
        <Link className='btn btn-dark' onClick={signInUser} to='/user'>logOn...</Link>
      </Div>
    </>
  );
}
