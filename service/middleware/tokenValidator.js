import jwt from 'jsonwebtoken';
import { KEY_JWT } from '../config/index.js';

const tokenValidator = (req = request, res = response, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(404).json({ error: 'The token is required' });
  } else {
    try {
      const { id, isAdmin } = jwt.verify(token, KEY_JWT);
      req.id = id;
      req.isAdmin = isAdmin;
      return next();
    } catch (error) {
      return res
        .status(401)
        .json({ error: 'The token could not be processed' });
    }
  }
};

export default tokenValidator;
