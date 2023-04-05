import TechTalkApi from './apiConfig.js';

export default async function login(email, pass) {
  try {
    const { data } = await TechTalkApi.post('/auth/login', {
      email: email,
      password: pass,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Contraseña incorrecta');
    } else {
      throw new Error('Error inesperado');
    }
  }
}
