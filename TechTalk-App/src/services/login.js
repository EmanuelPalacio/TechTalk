import TechTalkApi from './apiConfig.js';
import jwtDecode from 'jwt-decode';

export default async function login(email, pass) {
  try {
    const { data } = await TechTalkApi.post('/auth/login', {
      email: email,
      password: pass,
    });
    const decoded = jwtDecode(data.token);
    return { id: decoded.id, token: data.token };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Contraseña incorrecta');
    } else {
      console.log(error);
      throw new Error('Error inesperado');
    }
  }
}
