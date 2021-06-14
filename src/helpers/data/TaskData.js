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
        .then((resp) => resolve(resp.data));
    })
    .catch((error) => reject(error));
});

// original, working updateTask just in case
// const updateTask = (taskObj) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/task/${taskObj.firebaseKey}.json`, taskObj)
//     .then(() => getTasks(taskObj.uid).then(resolve))
//     .catch((error) => reject(error));
// });

// updateTask updates all tables associated to the respective task (tascam, memo)
const updateTask = (taskObj, memo1Obj, memo2Obj, memo3Obj, tascamObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/task/${taskObj.firebaseKey}.json`, taskObj);
  axios.patch(`${dbUrl}/memo/${memo1Obj.firebaseKey}.json`, memo1Obj);
  axios.patch(`${dbUrl}/memo/${memo2Obj.firebaseKey}.json`, memo2Obj);
  axios.patch(`${dbUrl}/memo/${memo3Obj.firebaseKey}.json`, memo3Obj);
  axios.patch(`${dbUrl}/tascam/${tascamObj.firebaseKey}.json`, tascamObj);
})
  .then(() => getTasks(taskObj.uid).then(resolve))
  .catch((error) => reject(error));

const deleteTask = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/task/${firebaseKey}.json`)
    .then(() => getTasks(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getTasks, addTask, updateTask, deleteTask
};
