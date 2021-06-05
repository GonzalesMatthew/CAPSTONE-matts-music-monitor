import React from 'react';
import PropTypes from 'prop-types';
import UserLanding from '../components/UserLanding';
import TaskWindow from '../components/TaskWindow';
import ContributionGraph from '../components/ContributionGraph';

export default function UserProfile({ user }) {
  return (
    <>
      <UserLanding user={user}/>
      <TaskWindow user={user}/>
      <ContributionGraph user={user}/>
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any
};
