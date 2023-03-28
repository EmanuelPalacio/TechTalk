import { OAuth2Client } from 'google-auth-library';
import { check } from 'express-validator';
import checkExpressValidator from './checkExpressValidator.js';
import { GOOGLE_CLIENT_ID } from '../config/enviroments.js';

const validateLoginGoogle = [
  check('token', 'el token es obligatorio').notEmpty(),
  checkExpressValidator,
  async (req, res, next) => {
    try {
      const client = new OAuth2Client(GOOGLE_CLIENT_ID);
      const dataUser = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID,
      });
      const payload = dataUser.getPayload();
      req.google = payload;
      return next();
    } catch (error) {
      res.status(400).json({
        ok: false,
        msg: 'error al verificar google token',
        error,
      });
    }
  },
];
export default validateLoginGoogle;
