import { ref, child, get } from 'firebase/database';
import { realtimeDB } from '../firebase';

const dbRef = ref(realtimeDB);

export default async function getUser(userId) {
  try {
    let userSnapshot;
    let userData;
    if (userId) {
      userSnapshot = await get(child(dbRef, `users/${userId}`));
    } else {
      userSnapshot = await get(child(dbRef, `users`));
    }
    if (userSnapshot.exists() && userId) {
      userData = userSnapshot.val();
      return userData;
    }
    if (userSnapshot.exists()) {
      userData = Object.values(userSnapshot.val());
      return userData;
    }
    console.log('No se encontraron datos para el usuario con ID:', userId);
    return null;
  } catch (error) {
    console.log('Error al obtener los datos del usuario:', error);
    return null;
  }
}
