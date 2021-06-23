import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserLanding from '../components/UserLanding';
import TaskWindow from '../components/TaskWindow';
import ContributionGraph from '../components/ContributionGraph';

export default function UserProfile({
  user, tasks, setTasks
}) {
  // get start and end date for the CalendarHeatmap;
  const [start, setStartDate] = useState([]);
  const [end, setEndDate] = useState([]);

  useEffect(() => {
    // last element contains earliest date
    setStartDate(tasks[tasks.length - 1].day);
    // first element contains most recent date
    setEndDate(tasks[0].day);
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
        start={start}
        end={end}
      />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
