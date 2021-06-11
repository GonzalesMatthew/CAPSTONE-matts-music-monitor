import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserLanding from '../components/UserLanding';
import TaskWindow from '../components/TaskWindow';
import ContributionGraph from '../components/ContributionGraph';

export default function UserProfile({
  user, tasks, setTasks
}) {
  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);
  useEffect(() => {
    setModalStatus(false);
  }, []);
  return (
    <>
      <UserLanding
        user={user}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        setTasks={setTasks}
        modalToggle={modalToggle}
      />
      <TaskWindow
        user={user}
        tasks={tasks}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        modalToggle={modalToggle}
      />
      <ContributionGraph user={user}/>
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
