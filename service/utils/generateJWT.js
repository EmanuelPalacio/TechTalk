import jwt from 'jsonwebtoken';
import { KEY_JWT } from '../config/index.js';

const generateJwt = async (id, isAdmin) => {
  const token = jwt.sign({ id, isAdmin }, KEY_JWT, {
    expiresIn: '24h',
  });
  return token;
};
export default generateJwt;
