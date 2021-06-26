import React from 'react';
// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserLanding from '../components/UserLanding';
import TaskWindow from '../components/TaskWindow';
import ContributionGraph from '../components/ContributionGraph';
// import { getTasks } from '../helpers/data/TaskData';

export default function UserProfile({
  user, tasks, setTasks
}) {
  // import { getTasks } from '../helpers/data/TaskData';
  // get tasks
  // const [tasks, setTasks] = useState([]);
  // useEffect(() => {
  //   getTasks(user.uid).then(setTasks);
  // }, []);

  return (
    <>
      <UserLanding
        user={user}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ContributionGraph
        tasks={tasks}
      />
      <TaskWindow
        user={user}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
