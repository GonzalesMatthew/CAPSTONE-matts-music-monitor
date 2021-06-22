import React from 'react';
import PropTypes from 'prop-types';
import UserLanding from '../components/UserLanding';
import TaskWindow from '../components/TaskWindow';
import ContributionGraph from '../components/ContributionGraph';

export default function UserProfile({
  user, tasks, setTasks
}) {
  return (
    <>
      <UserLanding
        user={user}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskWindow
        user={user}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ContributionGraph
        tasks={tasks}
      />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
