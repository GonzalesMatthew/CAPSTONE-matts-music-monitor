import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { addMemo } from './MemoData';
import { addTask, getTasks } from './TaskData';

const dbUrl = firebaseConfig.databaseURL;

const getTascam = (taskId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tascam.json?orderBy="taskId"&equalTo="${taskId}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addTascam = (taskObj, memo1Obj, memo2Obj, memo3Obj, track) => new Promise((resolve, reject) => {
  const task = addTask(taskObj);
  const memo1 = addMemo(memo1Obj);
  const memo2 = addMemo(memo2Obj);
  const memo3 = addMemo(memo3Obj);
  const trackItem = track;

  Promise.all([task, memo1, memo2, memo3, trackItem])
    .then(([taskResponse, memo1Response, memo2Response, memo3Response]) => {
      // create the tascamObj from the above Promises:
      const enhancedTascamObj = {
        memoId1: memo1Response.firebaseKey,
        memoId2: memo2Response.firebaseKey,
        memoId3: memo3Response.firebaseKey,
        taskId: taskResponse.firebaseKey,
        track: trackItem,
      };
      // post the tascamObj
      axios.post(`${dbUrl}/tascam.json`, enhancedTascamObj)
      // patch the firebaseKey into newly created tascam data
        .then((response) => {
          const fbKey = { firebaseKey: response.data.name };
          axios.patch(`${dbUrl}/tascam/${response.data.name}.json`, fbKey)
            .then(() => getTasks(taskObj.uid).then(resolve));
        });
    })
    .catch((error) => reject(error));
});

export {
  getTascam, addTascam
};
