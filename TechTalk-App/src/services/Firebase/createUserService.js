import {
  getAuth,
  createUserWithEmailAndPassword,
  /* deleteUser, */
} from 'firebase/auth';
import firebase from './firebase';
import addUser from './usersDB/addUser';
import userDataAdapter from '../../adapters/userDataAdapter';

const auth = getAuth(firebase);
const createUserService = async ({ email, password, phone, name }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const data = userDataAdapter(user, name, phone);
    addUser(data);
    return data;
  } catch (error) {
    throw error.code;
  }
};
export default createUserService;
