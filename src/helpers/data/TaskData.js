import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTasks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/task.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addTask = (taskObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/task.json`, taskObj)
    .then((response) => {
      const fbKey = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/task/${response.data.name}.json`, fbKey)
        .then(() => {
          getTasks(taskObj.uid).then((taskArray) => resolve(taskArray));
        });
    })
    .catch((error) => reject(error));
});

export { getTasks, addTask };
