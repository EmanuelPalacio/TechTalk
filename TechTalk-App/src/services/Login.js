import jwtDecode from 'jwt-decode';
import TechTalkApi from './ApiConfig';

export default async function login({ email, password }) {
  try {
    const { data } = await TechTalkApi.post('/auth/login', {
      email,
      password,
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
