import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

export default instance;
