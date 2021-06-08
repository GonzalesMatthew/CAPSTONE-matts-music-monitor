import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getInstrument = (instrumentId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/instrument/${instrumentId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getInstrument;
