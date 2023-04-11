import TechTalkApi from './apiConfig.js';

export default async function register({ email, password, phone, fullname }) {
  const toLowerCase = email.toLowerCase();
  try {
    const { data } = await TechTalkApi.post('/user/create', {
      email: toLowerCase,
      password,
      phone,
      fullname,
    });

    return { data };
  } catch (error) {
    console.log(error);
    throw new Error('Error inesperado');
  }
}
