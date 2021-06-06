import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTopic = (topicId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/topic/${topicId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getTopic;
