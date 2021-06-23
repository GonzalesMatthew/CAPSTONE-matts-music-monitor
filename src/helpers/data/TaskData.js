import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTasks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/task.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const array = Object.values(response.data);
      array.sort((a, b) => ((a.day < b.day) ? 1 : -1));
      resolve(array);
    })
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

// updateTask updates all tables associated to the respective task (tascam, memo)
const updateTask = (taskObj, memo1Obj, memo2Obj, memo3Obj, tascamObj) => new Promise((resolve, reject) => {
  // patch each table object
  const patchTask = axios.patch(`${dbUrl}/task/${taskObj.firebaseKey}.json`, taskObj);
  const patchMemo1 = axios.patch(`${dbUrl}/memo/${memo1Obj.firebaseKey}.json`, memo1Obj);
  const patchMemo2 = axios.patch(`${dbUrl}/memo/${memo2Obj.firebaseKey}.json`, memo2Obj);
  const patchMemo3 = axios.patch(`${dbUrl}/memo/${memo3Obj.firebaseKey}.json`, memo3Obj);
  const patchTascam = axios.patch(`${dbUrl}/tascam/${tascamObj.firebaseKey}.json`, tascamObj);

  Promise.all([patchTask, patchMemo1, patchMemo2, patchMemo3, patchTascam])
    .then(() => getTasks(taskObj.uid).then(resolve))
    .catch((error) => reject(error));
});

const deleteTask = (taskFbKey, tascamFbKey, memo1FbKey, memo2FbKey, memo3FbKey, uid) => new Promise((resolve, reject) => {
  const deleteTaskObj = axios.delete(`${dbUrl}/task/${taskFbKey}.json`);
  const deleteTascam = axios.delete(`${dbUrl}/tascam/${tascamFbKey}.json`);
  const deleteMemo1 = axios.delete(`${dbUrl}/memo/${memo1FbKey}.json`);
  const deleteMemo2 = axios.delete(`${dbUrl}/memo/${memo2FbKey}.json`);
  const deleteMemo3 = axios.delete(`${dbUrl}/memo/${memo3FbKey}.json`);
  Promise.all([deleteTaskObj, deleteTascam, deleteMemo1, deleteMemo2, deleteMemo3])
    .then(() => getTasks(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getTasks, addTask, updateTask, deleteTask
};
