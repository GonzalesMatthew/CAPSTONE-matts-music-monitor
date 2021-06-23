import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserLanding from '../components/UserLanding';
import TaskWindow from '../components/TaskWindow';
import ContributionGraph from '../components/ContributionGraph';
import { getTasks } from '../helpers/data/TaskData';

export default function UserProfile({
  user
}) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(user.uid).then(setTasks);
  }, []);

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
};
