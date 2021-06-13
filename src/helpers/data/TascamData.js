import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTascam = (taskId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tascam/${taskId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addTascam = (tascamObj) => new Promise((reject) => {
  axios.post(`${dbUrl}/tascam.json`, tascamObj)
    .then((response) => {
      const fbKey = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/tascam/${response.data.name}.json`, fbKey);
    })
    .catch((error) => reject(error));
});

// const getTascams = () => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/tascam.json`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

export {
  getTascam, addTascam
};
