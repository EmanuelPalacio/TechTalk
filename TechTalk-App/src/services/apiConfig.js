import axios from 'axios';
import { LOCAL_HOST, HOST_PROD } from '@env';

const URL =
  process.env.NODE_ENV === 'development'
    ? `${LOCAL_HOST}/api`
    : `${HOST_PROD}/api`;
console.log(URL);
const TechTalkApi = axios.create({
  baseURL: URL,
});
export default TechTalkApi;
