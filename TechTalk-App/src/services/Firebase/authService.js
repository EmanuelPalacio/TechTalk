import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from './firebase';
import userDataAdapter from '../../adapters/userDataAdapter';
import { getUser } from './usersDB';

const auth = getAuth(firebase);

const authService = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { userId } = userDataAdapter(user);
    const data = await getUser(userId);
    return data;
  } catch (error) {
    throw error.code;
  }
};
export default authService;
