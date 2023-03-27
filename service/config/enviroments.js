import dotenv from 'dotenv';

dotenv.config();

/* -----------  CONFIG ENVIROMENTS  ---------- */
export const PORT =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_PORT
    : process.env.PORT;
/* -----------  MONGO  ---------- */
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const DATABASE = 'TechTalk';

export const MONGODB = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@techtalk.4cnzxqu.mongodb.net/?retryWrites=true&w=majority/${DATABASE}`;

/* -----------  CLOUDINARY  ---------- */
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRETS = process.env.CLOUDINARY_API_SECRETS;
