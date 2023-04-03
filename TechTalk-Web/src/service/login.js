import serverApi from './configAxios.js';

export default async function login(data) {
  try {
    const res = await serverApi.post('/auth/login', data);
    return res;
  } catch (error) {
    console.log(error);
  }
}
