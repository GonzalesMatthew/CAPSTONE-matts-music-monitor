import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import UserProfile from '../views/UserProfile';
import { getTasks } from './data/TaskData';

export default function Routes({
  user
}) {
  // get tasks
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks(user.uid).then(setTasks);
  }, []);

  return (
    <div>
      <Switch>
        { user
          ? <Route exact path='/user' component={() => <UserProfile
            user={user}
            tasks={tasks}
            setTasks={setTasks}
            />} />
          : <Route exact path='/' component={Home} />
        }
        <Route path='*' component = {NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};
