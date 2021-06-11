import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getInstrument = (instrumentId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/instrument/${instrumentId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getInstruments = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/instrument.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export { getInstrument, getInstruments };
