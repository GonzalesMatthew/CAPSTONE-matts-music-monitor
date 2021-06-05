import React from 'react';
import { Link } from 'react-router-dom';
import { signInUser } from '../helpers/auth';

export default function Home() {
  return (
    <>
      <div>
        Matts Music Monitor...
      </div>
      <Link className='btn btn-dark' onClick={signInUser} to='/user'>logOn...</Link>
    </>
  );
}
