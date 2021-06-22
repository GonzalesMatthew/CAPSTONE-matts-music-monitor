import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import firebaseConfig from '../helpers/apiKeys';
import { getTasks } from '../helpers/data/TaskData';
import Routes from '../helpers/Routes';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid
        };
        setUser(userInfoObj);
        getTasks(userInfoObj.uid).then((resp) => {
          resp.sort((a, b) => ((a.day < b.day) ? 1 : -1));
          setTasks(resp);
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar
      user={user}
    />
    <Routes
      user={user}
      tasks={tasks}
      setTasks={setTasks}
    />
  </>
  );
}

export default App;
