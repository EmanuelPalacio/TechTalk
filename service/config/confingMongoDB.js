import mongoose from 'mongoose';
import { MONGODB } from './enviroments.js';

const mongoConection = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGODB);
    console.log('exito al conectar con mongo atlas');
  } catch (error) {
    console.log(error);
  }
};
export default mongoConection;
