import axios from 'axios';

const eviroment =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/api'
    : 'https://techtalkservice.onrender.com/api';

const serverApi = axios.create({
  baseURL: eviroment,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default serverApi;
