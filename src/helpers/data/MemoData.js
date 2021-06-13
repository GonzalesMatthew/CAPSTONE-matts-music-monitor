import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMemo = (memoId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/memo/${memoId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addMemo = (memoObj) => new Promise((reject) => {
  axios.post(`${dbUrl}/memo.json`, memoObj)
    .then((response) => {
      const fbKey = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/memo/${response.data.name}.json`, fbKey);
    })
    .catch((error) => reject(error));
});

export {
  getMemo, addMemo
};
