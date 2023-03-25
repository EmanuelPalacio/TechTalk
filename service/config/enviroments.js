import dotenv from 'dotenv';

dotenv.config();

/* -----------  CONFIG ENVIROMENTS  ---------- */
export const PORT =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_PORT
    : process.env.PORT;

/* -----------  MONGO  ---------- */
export const MONGODB = process.env.MONGODB_CONNECTION;

/* -----------  CLOUDINARY  ---------- */
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRETS = process.env.CLOUDINARY_API_SECRETS;
