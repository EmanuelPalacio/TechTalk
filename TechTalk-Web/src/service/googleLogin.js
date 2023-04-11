import serverApi from './configAxios.js';

export default async function googleLogin(data) {
  try {
    const res = await serverApi.post(
      '/auth/google',
      {},
      {
        headers: {
          token: data,
        },
      },
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}
